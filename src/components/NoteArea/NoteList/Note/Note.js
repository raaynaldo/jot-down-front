import removeMd from "remove-markdown";

const Note = ({ title, body, onClick }) => {
  const maxSizeTitle = 21;
  const titleSlice = removeMd(title).slice(0, maxSizeTitle);

  const maxSizeBody = 70;
  const findSpace = body.indexOf("\n");
  const newBody = findSpace != -1 ? body.slice(findSpace) : "";
  const bodySlice = removeMd(newBody).slice(0, maxSizeBody);

  return (
    <div
      className="flex flex-col h-20 px-5 py-2 space-y-1 text-red-500 bg-gray-100"
      onClick={onClick}
    >
      <p className="font-bold">
        {titleSlice.length === 0
          ? "No Title"
          : titleSlice + (titleSlice.length >= maxSizeTitle ? "..." : "")}
      </p>
      <p className="text-xs break-all">
        {bodySlice + (bodySlice.length >= maxSizeBody ? "..." : "")}
      </p>
    </div>
  );
};

export default Note;