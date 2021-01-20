import { useState, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import MainContext from "../../context/main/mainContext";
import { getNote, saveNote } from "../../api";
import Loader from "react-loader-spinner";
import MDEditor from "@uiw/react-md-editor";
import { FaCheckCircle } from "react-icons/fa";
import "./MarkdownArea.css";
import Tags from "./Tags/Tags";

function MarkdownArea() {
  const [value, setValue] = useState("");
  const {
    activeNote,
    // updateActiveNote,
    // activeFolder,
    noteListQueryKey,
  } = useContext(MainContext);
  const { data, error, isLoading: isLoadingQuery, isError } = useQuery(
    ["note", activeNote.id],
    () => getNote(activeNote.id),
    {
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
    const newTimer = setTimeout(updateActiveNoteToBack, 3000);
    setTime(resetTimeout(time, newTimer));
    setValue(newValue);
  };

  const { mutateAsync } = useMutation(
    () => saveNote({ note: { id: activeNote.id, body: value } }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(noteListQueryKey);
        setTimeout(() => setSaved(false), 3000);
      },
    }
  );
  const queryClient = useQueryClient();
  const updateActiveNoteToBack = async () => {
    setSaved(true);
    await mutateAsync();
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
      <Tags tags={data.tags.map((tag) => tag.name)} data={data} noteId={activeNote.id} />
      <div className="relative Container">
        <MDEditor
          value={value}
          onChange={handleChange}
          visiableDragbar={false}
          autoFocus={false}
        />
        {saved ? (
          <div className="absolute z-50 flex flex-row items-center space-x-1.5 top-1 right-5">
            <FaCheckCircle className="text-green-400" />
            <p>Saved Successfully</p>
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <div className="flex-auto bg-gray-300 svg dark:bg-gray-700"></div>
  );
}

export default MarkdownArea;
