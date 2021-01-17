const Tag = ({ name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="transform cursor-pointer hover:scale-110 motion-reduce:transform-none"
    >
      #{name}
    </div>
  );
};

export default Tag;
