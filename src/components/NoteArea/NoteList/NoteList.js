import { useContext, useEffect } from "react";
import Note from "./Note/Note";
import { getAllNotesByFolderId } from "../../../api";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";
import MainContext from "../../../context/main/mainContext";
import { FOLDER_TYPES } from "../../../constant";

const NoteList = () => {
  const {
    activeFolder,
    activeNote,
    updateActiveNote,
    noteListQueryKey,
    setNoteListQueryKey,
  } = useContext(MainContext);

  useEffect(() => {
    setNoteListQueryKey(
      activeFolder.type === FOLDER_TYPES.folder ||
        activeFolder.type === FOLDER_TYPES.tag
        ? ["notes", activeFolder.type, activeFolder.id]
        : ["notes", activeFolder.type]
    );
  }, [activeFolder.type, activeFolder.id]);

  const { data, error, isLoading, isError } = useQuery(
    noteListQueryKey,
    () => getAllNotesByFolderId(activeFolder.type, activeFolder.id),
    {
      enabled: !activeFolder.isLoading,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return (
      <>
        <Loader type="ThreeDots" color="#ccc" height={5} />
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="w-64 h-full mt-4 space-y-2 overflow-y-auto">
      {data?.map((note, idx) => (
        <Note
          key={idx}
          title={note.title}
          body={note.body}
          onClick={() => {
            if (activeNote.id !== note.id) {
              console.log("ganti note");
              updateActiveNote({
                id: note.id,
                active: true,
                dataLoaded: false,
              });
            }
          }}
        />
      ))}
    </div>
  );
};

export default NoteList;
