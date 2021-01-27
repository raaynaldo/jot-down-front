import { useState } from "react";
import MainContext from "./mainContext";
import { FOLDER_TYPES } from "../../constant";

const MainProvider = (props) => {
  const [folderList, setFolderList] = useState([]);
  const [activeFolder, setActiveFolder] = useState({
    id: 0,
    type: FOLDER_TYPES.folder,
    isLoading: true,
  });
  const [activeNote, setActiveNote] = useState({
    id: 0,
    active: false,
    // dataLoaded: false,
  });
  const [noteListQueryKey, setNoteListQueryKey] = useState([]);
  const [searchKeyNote, setSearchKeyNote] = useState("");

  const updateActiveFolder = (data) => {
    setActiveFolder({
      ...activeFolder,
      ...data,
    });
  };

  const updateActiveNote = (data) => {
    setActiveNote({
      ...activeNote,
      ...data,
    });
  };

  return (
    <MainContext.Provider
      value={{
        activeFolder,
        activeNote,
        noteListQueryKey,
        updateActiveFolder,
        updateActiveNote,
        setNoteListQueryKey,
        folderList,
        setFolderList,
        searchKeyNote,
        setSearchKeyNote,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
