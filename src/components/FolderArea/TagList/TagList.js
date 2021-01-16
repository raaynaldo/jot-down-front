import Tag from "./Tag/Tag";
import { getAllTags } from "../../../api";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";

const TagList = () => {
  const { data, error, isLoading, isError } = useQuery("tags", getAllTags, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <>
        <Loader type="ThreeDots" color="#ccc" height={5} />
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div id="TagList" className="space-y-2">
      {data.map((tag, idx) => (
        <Tag key={idx} name={tag.name} />
      ))}
    </div>
  );
};

export default TagList;
