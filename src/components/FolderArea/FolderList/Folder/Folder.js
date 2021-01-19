const Folder = ({ name, onClick, active }) => {
  return (
    <div
      className={`pl-3 transform cursor-pointer hover:scale-110 motion-reduce:transform-none ${active}`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default Folder;
