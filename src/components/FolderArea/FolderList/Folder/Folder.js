const Folder = ({ name, onClick }) => {
  return (
    <div className="pl-3" onClick={onClick}>
      {name}
    </div>
  );
};

export default Folder;
