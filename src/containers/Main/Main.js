// import { useState } from "react";
import MarkdownArea from "../../components/MarkdownArea/MarkdownArea";
import FolderSideBar from "../../components/FolderArea/FolderArea";
import NoteSideBar from "../../components/NoteArea/NoteArea";
import "./Main.css";

const Main = () => {
  // const [opened, setOpened] = useState(true);

  return (
    <div className="flex flex-row main__container">
      <FolderSideBar />
      <NoteSideBar />
      <MarkdownArea />
    </div>
  );
};

export default Main;
