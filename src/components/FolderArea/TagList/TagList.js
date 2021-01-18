import { useContext } from "react";
import Tag from "./Tag/Tag";
import MainContext from "../../../context/main/mainContext";
import { FOLDER_TYPES } from "../../../constant";
import { getAllTags } from "../../../api";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";

const TagList = () => {
  const { activeFolder, updateActiveFolder, updateActiveNote } = useContext(
    MainContext
  );

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
        <Tag
          key={idx}
          name={tag.name}
          onClick={() => {
            if (
              activeFolder.id !== tag.id ||
              activeFolder.type !== FOLDER_TYPES.tag
            ) {
              updateActiveFolder({ id: tag.id, type: FOLDER_TYPES.tag });
              updateActiveNote({ id: 0, active: false, dataLoaded: false });
            }
          }}
        />
      ))}
    </div>
  );
};

export default TagList;
