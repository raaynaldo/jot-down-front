import { useState, useContext, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import MainContext from "../../context/main/mainContext";
import { getNote, saveNote } from "../../api";
import Loader from "react-loader-spinner";
import MDEditor from "@uiw/react-md-editor";
import { FOLDER_TYPES } from "../../constant";
import { FaCheckCircle } from "react-icons/fa";
import "./MarkdownArea.css";
import Tags from "./Tags/Tags";

function MarkdownArea() {
  const [value, setValue] = useState("");
  const {
    activeNote,
    // updateActiveNote,
    activeFolder,
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

  // useEffect(() => {
  //   // if (value !== "") console.log("Component did change", value);
  //   if (activeNote.id !== 0 && value !== "") console.log(value, activeNote.id);
  //   return () => {
  //     if (activeNote.id !== 0 && value !== "") console.log(value, activeNote.id);
  //     // console.log(data.body);
  //     // console.log(value);
  //     // if (activeNote.id !== 0 && value !== data.body) console.log("Component will unmount", value);
  //   };
  // }, [activeNote]);

  // useEffect(() => {
  //   if (data !== undefined) console.log(data);
  // }, [data]);

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
        setTimeout(() => setSaved(false), 1000);
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
            color="#d1fae5"
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

  const isFolderOrTags = (type) => {
    return type === FOLDER_TYPES.folder || type === FOLDER_TYPES.tag;
  };

  return activeNote.id !== 0 ? (
    <div className="flex-auto">
      <Tags
        tags={data.tags.map((tag) => tag.name)}
        data={data}
        noteId={activeNote.id}
        disabled={!isFolderOrTags(activeFolder.type)}
      />
      <div className="relative Container">
        <MDEditor
          value={value}
          onChange={handleChange}
          visiableDragbar={false}
          autoFocus={false}
          preview={isFolderOrTags(activeFolder.type) ? "live" : "preview"}
          hideToolbar={!isFolderOrTags(activeFolder.type)}
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
