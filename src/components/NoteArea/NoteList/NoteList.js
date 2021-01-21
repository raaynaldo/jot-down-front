import { useContext, useEffect } from "react";
import Note from "./Note/Note";
import { getAllNotesByFolderId } from "../../../api";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";
import MainContext from "../../../context/main/mainContext";
import { useContextMenu } from "react-contexify";
import { FOLDER_TYPES } from "../../../constant";

const NoteList = () => {
  const {
    activeFolder,
    activeNote,
    updateActiveNote,
    noteListQueryKey,
    setNoteListQueryKey,
    searchKeyNote,
  } = useContext(MainContext);

  const { show } = useContextMenu({
    id: "note-context-menu",
  });

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

  const ContextMenuHandler = (e, id) => {
    clickHandler(id);
    show(e, {
      props: {
        id: id,
        folderType: activeFolder.type,
      },
    });
  };

  const clickHandler = (id) => {
    if (activeNote.id !== id) {
      updateActiveNote({
        id: id,
        active: true,
        dataLoaded: false,
      });
    }
  };

  // console.log(searchKeyNote);
  return (
    <div className="w-64 h-full mt-4 space-y-2 overflow-y-auto cursor-pointer">
      {data
        ?.filter((note) =>
          note.body.toLowerCase().includes(searchKeyNote.toLowerCase())
        )
        .map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            onClick={() => clickHandler(note.id)}
            onContextMenu={(e) => ContextMenuHandler(e, note.id)}
          />
        ))}
    </div>
  );
};

export default NoteList;
