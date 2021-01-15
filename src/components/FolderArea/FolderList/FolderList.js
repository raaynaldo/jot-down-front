import Folder from "./Folder/Folder";
const FolderList = () => {
  const folders = ["A", "B", "C"];

  return (
    <div id="FolderList" className="space-y-2">
      <div>Folders</div>
      {folders.map((folder) => (
        <Folder name={folder} />
      ))}
      <div>Archived</div>
      <div>Trash</div>
    </div>
  );
};

export default FolderList;
