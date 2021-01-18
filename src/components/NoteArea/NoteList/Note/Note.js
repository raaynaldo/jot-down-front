import removeMd from "remove-markdown";

const Note = ({ title, body, onClick }) => {
  const titleSlice = removeMd(title).slice(0, 21);
  const bodySlice = removeMd(body).slice(0, 65);

  return (
    <div
      className="flex flex-col h-20 px-5 py-3 space-y-1 text-red-500 bg-gray-100"
      onClick={onClick}
    >
      {/* <b>React Router DOM</b>
      <p className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </p> */}
      <b>{titleSlice.length === 0 ? "No Title" : titleSlice + (titleSlice.length > 20 ? "..." : "")}</b>
      <p className="text-xs">
        {bodySlice + (bodySlice.length > 64 ? "..." : "")}
      </p>
    </div>
  );
};

export default Note;
