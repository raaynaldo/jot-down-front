const Folder = ({ name, onClick }) => {
  return (
    <div className="pl-3 cursor-pointer" onClick={onClick}>
      {name}
    </div>
  );
};

export default Folder;
