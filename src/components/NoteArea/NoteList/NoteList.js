import { useContext, useEffect } from "react";
import Note from "./Note/Note";
import { getAllNotesByFolderId } from "../../../api";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";
import MainContext from "../../../context/main/mainContext";
import { useContextMenu } from "react-contexify";
import { FOLDER_TYPES } from "../../../constant";
import { FaPencilAlt } from "react-icons/fa";
import removeMd from "remove-markdown";

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
        <Loader
          type="ThreeDots"
          color="#d1fae5"
          height={15}
          className="flex items-center justify-center h-full"
        />
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // if (data?.length === 0) {
  //   return (
  //     <button
  //       type="submit"
  //       className="w-full px-4 py-2 tracking-wide text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
  //     >
  //       Add a note
  //     </button>
  //   );
  // }

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

  const addANoteHandler = () => {
    document.getElementById("create-note-btn").click();
  };

  // console.log(searchKeyNote);
  return (
    <div className="w-64 h-full mt-4 space-y-2 overflow-y-auto">
      {data?.length > 0 ? (
        data
          ?.filter((note) =>
            removeMd(note.body)
              .toLowerCase()
              .includes(searchKeyNote.toLowerCase())
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
          ))
      ) : (
        <div className="flex flex-col items-center w-full">
          <button
            type="submit"
            className="flex items-center justify-between w-1/2 px-4 py-2 text-sm tracking-wide text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={() => addANoteHandler()}
          >
            <FaPencilAlt />
            <span>Add a note</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteList;
