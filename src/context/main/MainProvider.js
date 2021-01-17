import { useState } from "react";
import MainContext from "./mainContext";
import { FOLDER_TYPES } from "../../constant";

const MainProvider = (props) => {
  const [activeNote, setActiveNote] = useState({ id: 0, isLoading: true, dataLoaded: false });
  const [folder, setFolder] = useState({
    id: 0,
    type: FOLDER_TYPES.folder,
    isLoading: true,
  });

  const updateactiveNote = (data) => {
    setActiveNote({
      ...activeNote,
      ...data,
    });
  };

  const updateFolder = (data) => {
    setFolder({
      ...folder,
      ...data,
    });
  };

  return (
    <MainContext.Provider
      value={{ activeNote, folder, updateFolder, updateactiveNote }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
