import { useContext } from "react";
import Folder from "./Folder/Folder";
import MainContext from "../../../context/main/mainContext";
import { FOLDER_TYPES } from "../../../constant";
import { getAllFolders } from "../../../api";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";

const FolderList = () => {
  const { updateNote, updateFolder, folder } = useContext(MainContext);

  const { data, error, isLoading, isError } = useQuery(
    "folders",
    getAllFolders,
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        if (folder.isLoading) {
          updateFolder({
            id: data[0].id,
            type: FOLDER_TYPES.folder,
            isLoading: false,
          });
        }
      },
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
    <div id="FolderList" className="space-y-2">
      <div>Folders</div>
      {data?.map((folder, idx) => (
        <Folder
          key={idx}
          name={folder.name}
          onClick={() => {
            if (folder !== folder.id || folder.type !== FOLDER_TYPES.folder) {
              updateFolder({ id: folder.id, type: FOLDER_TYPES.folder });
              updateNote({ id: 0, isLoading: true, dataLoaded: false });
            }
          }}
        />
      ))}
      <div
        className="cursor-pointer"
        onClick={() => {
          if (folder !== folder.id || folder.type !== FOLDER_TYPES.archived) {
            updateFolder({ id: folder.id, type: FOLDER_TYPES.archived });
            updateNote({ id: 0, isLoading: true, dataLoaded: false });
          }
        }}
      >
        Archived
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          if (folder !== folder.id || folder.type !== FOLDER_TYPES.trash) {
            updateFolder({ id: folder.id, type: FOLDER_TYPES.trash });
            updateNote({ id: 0, isLoading: true, dataLoaded: false });
          }
        }}
      >
        Trash
      </div>
    </div>
  );
};

export default FolderList;
