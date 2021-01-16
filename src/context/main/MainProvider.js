import { useState } from "react";
import MainContext from "./mainContext";
import { FOLDER_TYPES } from "../../constant";

const MainProvider = (props) => {
  const [noteId, setNoteId] = useState(0);
  const [folder, setFolder] = useState({
    id: 0,
    type: FOLDER_TYPES.folder,
    isLoading: true,
  });

  const updateFolder = (data) => {
    setFolder({
      ...folder,
      ...data,
    });
  };

  return (
    <MainContext.Provider value={{ noteId, folder, setNoteId, updateFolder }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
