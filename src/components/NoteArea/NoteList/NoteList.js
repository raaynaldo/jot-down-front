import { useContext } from "react";
import Note from "./Note/Note";
import { getAllNotesByFolderId } from "../../../api";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";
import MainContext from "../../../context/main/mainContext";
import { FOLDER_TYPES } from "../../../constant";

const NoteList = () => {
  const { folder, updateNote } = useContext(MainContext);
  const queryKey =
    folder.type === FOLDER_TYPES.folder || folder.type === FOLDER_TYPES.tag
      ? ["notes", folder.type, folder.id]
      : ["notes", folder.type];
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
        <Note
          key={idx}
          title={note.title}
          body={note.body}
          onClick={() => {
            updateNote({ id: note.id, isLoading: false, dataLoaded: false });
            console.log(note.id);
          }}
        />
      ))}
    </div>
  );
};

export default NoteList;
