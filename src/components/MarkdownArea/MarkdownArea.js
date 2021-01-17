import { useState, useContext } from "react";
import { useQuery } from "react-query";
import MainContext from "../../context/main/mainContext";
import { getNote } from "../../api";
import Loader from "react-loader-spinner";
import MDEditor from "@uiw/react-md-editor";
import "./MarkdownArea.css";

function MarkdownArea() {
  const [value, setValue] = useState("**Hello world!!!**");
  const { note } = useContext(MainContext);
  const { data, error, isLoading, isError } = useQuery(
    ["note", note.id],
    () => getNote(note.id),
    {
      enabled: note.id !== 0,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setValue(data.body);
      },
    }
  );

  if (isLoading) {
    return (
      <>
        <div className="flex-auto">
            <Loader type="ThreeDots" color="#ccc" height={10} className="flex items-center justify-center flex-1"/>
        </div>
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return note.id !== 0 ? (
    <div className="flex-auto">
      {/* <input onChange={(e) => setValue(e.target.value)} /> */}
      <div className="Container">
        <MDEditor
          value={value}
          onChange={setValue}
          // height={window.innerHeight - 48}
          visiableDragbar={false}
          autoFocus={false}
        />
      </div>
    </div>
  ) : (
    <div className="flex-auto bg-gray-300 svg dark:bg-gray-700"></div>
  );
}

export default MarkdownArea;
