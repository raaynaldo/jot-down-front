import removeMd from "remove-markdown";

const Note = ({ title, body, onClick }) => {
  const titleSlice = removeMd(title).slice(0, 21);

  const findSpace = body.indexOf("\n");
  const newBody = findSpace != -1 ? body.slice(findSpace) : "";
  const bodySlice = removeMd(newBody).slice(0, 65);

  return (
    <div
      className="flex flex-col h-20 px-5 py-2 space-y-1 text-red-500 bg-gray-100"
      onClick={onClick}
    >
      {/* <b>React Router DOM</b>
      <p className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </p> */}
      <p className="font-bold">
        {titleSlice.length === 0
          ? "No Title"
          : titleSlice + (titleSlice.length > 20 ? "..." : "")}
      </p>
      <p className="text-xs">
        {bodySlice + (bodySlice.length > 64 ? "..." : "")}
      </p>
    </div>
  );
};

export default Note;
