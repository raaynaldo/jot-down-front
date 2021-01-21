import { useContext } from "react";
import removeMd from "remove-markdown";
import MainContext from "../../../../context/main/mainContext";
import Highlighter from "react-highlight-words";

const Note = ({ id, title, body, onClick, onContextMenu }) => {
  const { activeNote, searchKeyNote } = useContext(MainContext);
  const maxSizeTitle = 21;
  const titleRemoveMd = removeMd(title);

  const titleSlice = titleRemoveMd.slice(0, maxSizeTitle);
  const titleElipsis =
    titleSlice.length === 0
      ? "No Title"
      : titleSlice + (titleSlice.length === maxSizeTitle ? "..." : "");

  const maxSizeBody = 70;
  const findSpace = body.indexOf("\n");
  const newBody = findSpace !== -1 ? body.slice(findSpace) : "";
  const bodyRemoveMd = removeMd(newBody);
  let startBodySlice = 0;
  if (searchKeyNote != "") {
    startBodySlice = bodyRemoveMd.toLocaleLowerCase().indexOf(searchKeyNote);
    startBodySlice =
      startBodySlice < 5 && startBodySlice >= 0 ? 0 : startBodySlice - 5;
  }
  const bodySlice = bodyRemoveMd.slice(
    startBodySlice,
    startBodySlice + maxSizeBody
  );
  const bodyElipsis =
    (startBodySlice !== 0 ? "..." : "") +
    bodySlice +
    (bodySlice.length === maxSizeBody ? "..." : "");

  return (
    <div
      className={`flex flex-col h-20 px-5 py-2 space-y-1 text-gray-700 ${
        activeNote.id === id ? "bg-green-100" : "bg-gray-100"
      }`}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      <p className="font-bold">
        <Highlighter
          searchWords={[searchKeyNote]}
          textToHighlight={titleElipsis}
        />
      </p>
      <p className="text-xs break-all">
        <Highlighter
          searchWords={[searchKeyNote]}
          textToHighlight={bodyElipsis}
        />
      </p>
    </div>
  );
};

export default Note;
