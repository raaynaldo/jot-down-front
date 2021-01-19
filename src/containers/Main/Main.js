import MarkdownArea from "../../components/MarkdownArea/MarkdownArea";
import FolderSideBar from "../../components/FolderArea/FolderArea";
import NoteSideBar from "../../components/NoteArea/NoteArea";
import ContextMenu from "../../components/ContextMenu/ContextMenu";
import MainProvider from "../../context/main/MainProvider";
import "./Main.css";

const Main = () => {
  return (
    <div className="flex flex-row main__container">
      <MainProvider>
        <FolderSideBar />
        <NoteSideBar />
        <MarkdownArea />
        <ContextMenu />
      </MainProvider>
    </div>
  );
};

export default Main;
