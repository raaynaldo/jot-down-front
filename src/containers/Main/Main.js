import MarkdownArea from "../../components/MarkdownArea/MarkdownArea";
import FolderArea from "../../components/FolderArea/FolderArea";
import NoteArea from "../../components/NoteArea/NoteArea";
import ContextMenu from "../../components/ContextMenu/ContextMenu";
import ContextMenuFolder from "../../components/ContextMenuFolder/ContextMenuFolder";
import MainProvider from "../../context/main/MainProvider";
import "./Main.css";

const Main = () => {
  return (
    <div className="flex flex-row main__container">
      <MainProvider>
        <FolderArea />
        <NoteArea />
        <MarkdownArea />
        <ContextMenu />
        <ContextMenuFolder />
      </MainProvider>
    </div>
  );
};

export default Main;
