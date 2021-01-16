import { useState, useContext } from "react";
import { useQuery } from "react-query";
import MainContext from "../../context/main/mainContext";
import { getNote } from "../../api";
import Loader from "react-loader-spinner";
import MDEditor from "@uiw/react-md-editor";

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
        <Loader type="ThreeDots" color="#ccc" height={5} />
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex-auto bg-blue-200">
      <div className="container">
        <MDEditor
          value={value}
          onChange={setValue}
          height={window.innerHeight - 52}
          visiableDragbar={false}
        />
        {/* <MDEditor.Markdown source={value} /> */}
      </div>
    </div>
  );
}

export default MarkdownArea;
