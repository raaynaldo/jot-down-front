import { useContext } from "react";
import Folder from "./Folder/Folder";
import MainContext from "../../../context/main/mainContext";
import { FOLDER_TYPES } from "../../../constant";
import { getAllFolders } from "../../../api";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";

const FolderList = () => {
  const {
    updateActiveNote,
    updateActiveFolder,
    activeFolder,
    setFolderList,
  } = useContext(MainContext);

  const { data, error, isLoading, isError } = useQuery(
    "folders",
    getAllFolders,
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        updateActiveFolder({
          id: data[0].id,
          type: FOLDER_TYPES.folder,
          isLoading: false,
        });
        setFolderList(data);
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
          active={
            activeFolder.id === folder.id &&
            activeFolder.type === FOLDER_TYPES.folder
              ? "underline font-bold"
              : ""
          }
          onClick={() => {
            if (
              activeFolder.id !== folder.id ||
              activeFolder.type !== FOLDER_TYPES.folder
            ) {
              updateActiveFolder({ id: folder.id, type: FOLDER_TYPES.folder });
              updateActiveNote({ id: 0, active: false, dataLoaded: false });
            }
          }}
        />
      ))}
      <div
        className={`transform cursor-pointer hover:scale-110 motion-reduce:transform-none ${
          activeFolder.type === FOLDER_TYPES.archived
            ? "underline font-bold"
            : ""
        }`}
        onClick={() => {
          if (activeFolder.type !== FOLDER_TYPES.archived) {
            updateActiveFolder({
              id: 0,
              type: FOLDER_TYPES.archived,
            });
            updateActiveNote({ id: 0, active: false, dataLoaded: false });
          }
        }}
      >
        Archived
      </div>
      <div
        className={`transform cursor-pointer hover:scale-110 motion-reduce:transform-none ${
          activeFolder.type === FOLDER_TYPES.trash
            ? "underline font-bold"
            : ""
        }`}
        onClick={() => {
          if (activeFolder.type !== FOLDER_TYPES.trash) {
            updateActiveFolder({
              id: 0,
              type: FOLDER_TYPES.trash,
            });
            updateActiveNote({ id: 0, active: false, dataLoaded: false });
          }
        }}
      >
        Trash
      </div>
    </div>
  );
};

export default FolderList;
