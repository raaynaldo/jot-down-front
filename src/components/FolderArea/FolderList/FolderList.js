import { useContext, useState } from "react";
import Folder from "./Folder/Folder";
import MainContext from "../../../context/main/mainContext";
import { FOLDER_TYPES } from "../../../constant";
import { getAllFolders, createFolder } from "../../../api";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Loader from "react-loader-spinner";
import InputFolderName from "../../shared/InputFolderName/InputFolderName";
import { FiFolderPlus } from "react-icons/fi";

const FolderList = () => {
  const {
    updateActiveNote,
    updateActiveFolder,
    activeFolder,
    setFolderList,
  } = useContext(MainContext);
  const [newFolderActive, setNewFolderActive] = useState(false);
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

  //add new folder
  const { mutateAsync } = useMutation(createFolder);
  const queryClient = useQueryClient();
  const addNewFolderHanlder = async (name) => {
    const id = await mutateAsync({ name: name });
    await queryClient.invalidateQueries("folders");
    updateActiveFolder({ id: id });
  };

  if (isLoading) {
    return (
      <>
        <Loader
          type="ThreeDots"
          color="#d1fae5"
          height={15}
          className="flex items-center justify-center"
        />
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div id="FolderList" className="space-y-2">
      <div className="flex flex-row items-center space-x-2">
        <span>Folders</span>
        <FiFolderPlus
          className="cursor-pointer"
          onClick={() => setNewFolderActive(true)}
        />
      </div>
      <InputFolderName
        active={newFolderActive}
        setDeactive={() => setNewFolderActive(false)}
        onSave={addNewFolderHanlder}
      />
      {data?.map((folder, idx) => (
        <Folder
          key={idx}
          id={folder.id}
          name={folder.name}
          active={
            activeFolder.id === folder.id &&
            activeFolder.type === FOLDER_TYPES.folder
              ? "underline font-bold"
              : ""
          }
          updateActiveFolder={updateActiveFolder}
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
          activeFolder.type === FOLDER_TYPES.trash ? "underline font-bold" : ""
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
