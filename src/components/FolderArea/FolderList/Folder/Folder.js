const Folder = ({ name, onClick }) => {
  return (
    <div
      className="pl-3 transform cursor-pointer hover:scale-110 motion-reduce:transform-none"
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default Folder;
