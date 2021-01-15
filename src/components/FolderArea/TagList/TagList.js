import Tag from "./Tag/Tag";
const TagList = () => {
  const tags = ["welcome", "ruby", "cshrap", "python"];
  return (
    <div id="TagList" className="space-y-2">
      {tags.map((tag) => (
        <Tag name={tag} />
      ))}
    </div>
  );
};

export default TagList;
