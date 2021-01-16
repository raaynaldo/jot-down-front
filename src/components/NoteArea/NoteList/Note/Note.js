const Note = ({ title, body, onClick }) => {
  return (
    <div
      className="flex flex-col h-20 px-5 py-3 space-y-1 text-red-500 bg-gray-100"
      onClick={onClick}
    >
      {/* <b>React Router DOM</b>
      <p className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </p> */}
      <b>{title}</b>
      <p className="text-xs">{body.slice(0, 65)}...</p>
    </div>
  );
};

export default Note;
