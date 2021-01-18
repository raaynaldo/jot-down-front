import { FaSearch, FaPencilAlt, FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import NoteList from "./NoteList/NoteList";

const NoteSideBar = () => {
  const [opened, setOpened] = useState(true);
  return (
    <div
      className={`w-64 z-10  transition-all ml-0  ${
        opened ? "ml-40" : ""
      } bg-gray-200 flex flex-col pt-4`}
    >
      <div className="flex flex-row items-center space-x-2 ">
        <button
          className="py-2 bg-gray-300 border-black"
          onClick={() => setOpened((prev) => setOpened(!prev))}
        >
          <FaCaretRight className={`${opened ? "transform rotate-180" : ""}`} />
        </button>
        <div className="relative text-gray-900 ">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="h-10 pl-5 text-sm bg-white rounded-full focus:outline-none"
          />
          <button type="button" className="absolute top-0 right-0 mt-3 mr-4">
            <FaSearch />
          </button>
        </div>
        <div className="border-2">
          <button>
            <FaPencilAlt className="transform cursor-pointer hover:scale-110 motion-reduce:transform-none" />
          </button>
        </div>
      </div>

      <NoteList/>
    </div>
  );
};

export default NoteSideBar;
