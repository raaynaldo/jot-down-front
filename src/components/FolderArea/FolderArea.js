import FolderList from "./FolderList/FolderList";
import TagList from "./TagList/TagList";

const FolderSideBar = () => {
  return (
    <div className="fixed w-40 h-full px-5 pt-4 space-y-4 overflow-y-auto text-white bg-gray-800 top-12 items-left text-md">
      <FolderList />
      <TagList />
    </div>
  );
};

export default FolderSideBar;
