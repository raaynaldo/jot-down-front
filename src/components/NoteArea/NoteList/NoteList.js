import { useContext, createContext } from "react";
import Note from "./Note/Note";
import { getAllNotesByFolderId, getAllFolders } from "../../../api";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";
import MainContext from "../../../context/main/mainContext";
import { FOLDER_TYPES } from "../../../constant";

const NoteList = () => {
  const { folder } = useContext(MainContext);
  //   const notes = new Array(12).fill({
  //     title: "Hello, this is Title",
  //     body: "this is Body",
  //   });
  const queryKey =
    folder.type === FOLDER_TYPES.folder || folder.type === FOLDER_TYPES.tag
      ? ["notes", folder.type, folder.id]
      : ["notes", folder.type];
  console.log(queryKey);
  const { data, error, isLoading, isError } = useQuery(
    queryKey,
    () => getAllNotesByFolderId(folder.type, folder.id),
    {
      enabled: !folder.isLoading,
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
        <Note key={idx} title={note.title} body={note.body} />
      ))}
    </div>
  );
};

export default NoteList;
