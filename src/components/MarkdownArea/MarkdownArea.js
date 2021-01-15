import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

function MarkdownArea() {
  const [value, setValue] = useState("**Hello world!!!**");
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
