import { useContext } from "react";
import Folder from "./Folder/Folder";
import { getAllFolders } from "../../../api";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";
import MainContext from "../../../context/main/mainContext";

const FolderList = () => {
  const { setFolderId } = useContext(MainContext);
  const { data, error, isLoading, isError } = useQuery(
    "folders",
    getAllFolders,
    {
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
    <div id="FolderList" className="space-y-2">
      <div>Folders</div>
      {data?.map((folder, idx) => (
        <Folder
          key={idx}
          name={folder.name}
          onClick={() => setFolderId(folder.id)}
        />
      ))}
      <div>Archived</div>
      <div>Trash</div>
    </div>
  );
};

export default FolderList;
