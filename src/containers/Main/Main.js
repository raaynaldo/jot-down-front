import { useContext } from "react";
import MarkdownArea from "../../components/MarkdownArea/MarkdownArea";
import FolderSideBar from "../../components/FolderArea/FolderArea";
import NoteSideBar from "../../components/NoteArea/NoteArea";
import "./Main.css";
import ContextMenu from "../../components/ContextMenu/ContextMenu";
import MainContext from "../../context/main/mainContext";

const Main = () => {
  const { folderList } = useContext(MainContext);
  return (
    <div className="flex flex-row main__container">
      <FolderSideBar />
      <NoteSideBar />
      <MarkdownArea />
      <ContextMenu folders={folderList} />
    </div>
  );
};

export default Main;
