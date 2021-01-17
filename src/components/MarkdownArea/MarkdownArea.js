import { useState, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import MainContext from "../../context/main/mainContext";
import { getNote, saveNote } from "../../api";
import Loader from "react-loader-spinner";
import MDEditor from "@uiw/react-md-editor";
import "./MarkdownArea.css";

function MarkdownArea() {
  const [value, setValue] = useState("");
  const { activeNote, updateActiveNote, activeFolder } = useContext(MainContext);
  const { error, isLoading: isLoadingQuery, isError } = useQuery(
    ["note", activeNote.id],
    () => getNote(activeNote.id),
    {
      // enabled: !activeNote.isLoading && activeNote.id !== 0,
      enabled: activeNote.active,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setValue(data.body);
      },
    }
  );

  const [time, setTime] = useState(null);
  const [saved, setSaved] = useState(false);

  const resetTimeout = (id, newID) => {
    clearTimeout(id);
    return newID;
  };

  const handleChange = (newValue) => {
    if (activeNote.dataLoaded) {
      const newTimer = setTimeout(updateActiveNoteToBack, 3000);
      setTime(resetTimeout(time, newTimer));
      setValue(newValue);
    } else {
      updateActiveNote({ dataLoaded: true });
    }
  };

  const { mutateAsync, isLoading: isLoadingMutate } = useMutation(() =>
    saveNote({ note: { id: activeNote.id, body: value } })
  );
  const queryClient = useQueryClient();
  const updateActiveNoteToBack = async () => {
    setSaved(true);
    //save todb
    await mutateAsync();
    // queryClient.invalidateQueries(["note", note.id]);
    queryClient.invalidateQueries(["notes", activeFolder.type, activeFolder.id]);
    setSaved(false);
    // setTimeout(() => setSaved(false), 1000);
  };

  if (isLoadingQuery) {
    return (
      <>
        <div className="flex-auto bg-gray-300 svg dark:bg-gray-700">
          <Loader
            type="ThreeDots"
            color="#ee4540"
            height={15}
            className="flex items-center justify-center flex-1 h-full"
          />
        </div>
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return activeNote.id !== 0 ? (
    <div className="flex-auto">
      {/* <h1>{saved}</h1> */}
      <h1 className="text-red-50">{saved ? "saved" : ""}</h1>
      <div className="Container">
        <MDEditor
          value={value}
          onChange={handleChange}
          // height={window.innerHeight - 48}
          visiableDragbar={false}
          autoFocus={false}
        />
      </div>
    </div>
  ) : (
    <div className="flex-auto bg-gray-300 svg dark:bg-gray-700"></div>
  );
}

export default MarkdownArea;
