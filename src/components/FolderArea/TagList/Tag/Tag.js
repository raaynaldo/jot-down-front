const Tag = ({ name, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      #{name}
    </div>
  );
};

export default Tag;
