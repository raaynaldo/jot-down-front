import { FaSearch, FaCaretRight } from "react-icons/fa";
import { useState, useContext } from "react";
import NoteList from "./NoteList/NoteList";
import AddNote from "./AddNote/AddNote";
import MainContext from "../../context/main/mainContext";

const NoteSideBar = () => {
  const [opened, setOpened] = useState(true);
  const { searchKeyNote, setSearchKeyNote } = useContext(MainContext);
  return (
    <div
      className={`w-64 z-10  transition-all ml-0  ${
        opened ? "ml-52" : ""
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
            value={searchKeyNote}
            type="search"
            name="serch"
            placeholder="Search"
            className="h-10 pl-5 text-sm bg-white rounded-full focus:outline-none"
            onChange={(e) => setSearchKeyNote(e.target.value)}
          />
          <button type="button" className="absolute top-0 right-0 mt-3 mr-4">
            <FaSearch />
          </button>
        </div>
        <AddNote />
      </div>

      <NoteList />
    </div>
  );
};

export default NoteSideBar;
