import FolderList from "./FolderList/FolderList";
import TagList from "./TagList/TagList";

const FolderSideBar = () => {
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="fixed w-40 h-full px-5 pt-4 space-y-4 overflow-y-auto text-gray-900 bg-gray-300 dark:text-white dark:bg-gray-700 top-12 items-left"
    >
      <FolderList />
      <TagList />
    </div>
  );
};

export default FolderSideBar;
