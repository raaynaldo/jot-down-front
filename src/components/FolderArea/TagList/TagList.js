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
        <Loader
          type="ThreeDots"
          color="#d1fae5"
          height={15}
          className="flex items-center justify-center"
        />
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div id="TagList" className="pb-16 space-y-2">
      {data.map((tag) => (
        <Tag
          key={tag.id}
          name={tag.name}
          active={
            activeFolder.id === tag.id && activeFolder.type === FOLDER_TYPES.tag
              ? "underline font-bold"
              : ""
          }
          onClick={() => {
            if (
              activeFolder.id !== tag.id ||
              activeFolder.type !== FOLDER_TYPES.tag
            ) {
              updateActiveFolder({ id: tag.id, type: FOLDER_TYPES.tag });
              // updateActiveNote({ id: 0, active: false, dataLoaded: false });
              updateActiveNote({ id: 0, active: false });
            }
          }}
        />
      ))}
    </div>
  );
};

export default TagList;
