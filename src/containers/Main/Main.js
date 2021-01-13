import { FaSearch, FaPencilAlt, FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import MarkdownPreview from "../../components/MarkdownPreview/MarkdownPreview";
import "./Main.css";

const Main = () => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="flex flex-row main__container">
      <div className="w-40 fixed h-full top-12 bg-gray-900 text-white items-left px-5 pt-4 space-y-3">
        <div>Notes</div>
        <div>Folder A</div>
        <div>Folder B</div>
        <div>Folder C</div>
        <div>Trash</div>
      </div>

      <div
        className={`w-64 z-10  transition-all ml-0  ${
          opened ? "" : "ml-40"
        } bg-gray-200 flex flex-col pt-4`}
      >
        <div className="flex flex-row items-center space-x-2 ">
            <button className='bg-gray-300 border-black py-2' onClick={() => setOpened((prev) => setOpened(!prev))}>
              <FaCaretRight className={`${!opened ? 'transform rotate-180' : ''}`} />
            </button>
          <div className="relative text-gray-900 ">
            <input
              type="search"
              name="serch"
              placeholder="Search"
              className="bg-white h-10 px-5 rounded-full text-sm focus:outline-none"
            />
            <button type="button" className="absolute right-0 top-0 mt-3 mr-4">
              <FaSearch />
            </button>
          </div>
          <div>
            <button>
              <FaPencilAlt />
            </button>
          </div>
        </div>

        <div className="mt-4 h-full w-64 space-y-2 overflow-y-auto">
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <div className="flex flex-col bg-red-500 h-20 px-5 py-3 space-y-1">
            <b>React Router DOM</b>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
        </div>
      </div>

      <div className="flex-auto bg-blue-200">
        <MarkdownPreview />
      </div>
    </div>
  );
};

export default Main;
