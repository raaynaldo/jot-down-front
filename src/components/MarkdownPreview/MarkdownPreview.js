import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

function MarkdownPreview() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
        height={window.innerHeight - 52}
        visiableDragbar={false}
      />
      {/* <MDEditor.Markdown source={value} /> */}
    </div>
  );
}

export default MarkdownPreview;
