import { FaSearch } from "react-icons/fa";

const Main = () => {
  return (
    <div class="flex flex-row h-screen">
      <div className="w-40 bg-gray-900 text-white items-left px-5 pt-7 space-y-3">
        <div>Notes</div>
        <div>Folder A</div>
        <div>Folder B</div>
        <div>Folder C</div>
        <div>Trash</div>
      </div>
      <div className="w-64 bg-gray-50 flex flex-col items-center pt-7">
        <div class="relative text-gray-600">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <FaSearch />
          </button>
        </div>
        <div>Items</div>
      </div>
      <div className="flex-auto bg-blue-200">main content</div>
    </div>
  );
};

export default Main;
