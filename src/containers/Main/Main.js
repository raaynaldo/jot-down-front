import { createContext, useState } from "react";
import MarkdownArea from "../../components/MarkdownArea/MarkdownArea";
import FolderSideBar from "../../components/FolderArea/FolderArea";
import NoteSideBar from "../../components/NoteArea/NoteArea";
import MainContext from "../../context/main/mainContext";
import "./Main.css";

const Main = () => {
  // const [opened, setOpened] = useState(true);
  const [noteId, setNoteId] = useState(0);
  const [folderId, setFolderId] = useState(0);

  return (
    <div className="flex flex-row main__container">
      <MainContext.Provider
        value={{ noteId: 123, folderId, setNoteId, setFolderId }}
      >
        <FolderSideBar />
        <NoteSideBar />
        <MarkdownArea />
      </MainContext.Provider>
    </div>
  );
};

export default Main;
