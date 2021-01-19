const Tag = ({ name, onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={`transform cursor-pointer hover:scale-110 motion-reduce:transform-none + ${active}`}
    >
      #{name}
    </div>
  );
};

export default Tag;
