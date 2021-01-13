import { FaSearch, FaPencilAlt } from "react-icons/fa";

const Main = () => {
  return (
    <div class="flex flex-row h-screen">
      <div className="w-40 bg-gray-900 text-white items-left px-5 pt-4 space-y-3">
        <div>Notes</div>
        <div>Folder A</div>
        <div>Folder B</div>
        <div>Folder C</div>
        <div>Trash</div>
      </div>

      <div className="w-64 bg-gray-200 flex flex-col items-center pt-4">
        <div className="flex flex-row items-center space-x-2">
          <div class="relative text-gray-900 ">
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
          <div>
            <button>
              <FaPencilAlt />
            </button>
          </div>
        </div>

        <div className="mt-4 w-64 space-y-2 overflow-y-auto">
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </div>

      <div className="flex-auto bg-blue-200">main content</div>
    </div>
  );
};

export default Main;
