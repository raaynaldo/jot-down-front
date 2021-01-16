import { useState } from "react";
import MainContext from "./mainContext";
import { FOLDER_TYPES } from "../../constant";

const MainProvider = (props) => {
  const [note, setNote] = useState({ id: 0 });
  const [folder, setFolder] = useState({
    id: 0,
    type: FOLDER_TYPES.folder,
    isLoading: true,
  });

  const updateNote = (data) => {
      console.log(data)
    setNote({
      ...note,
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
      value={{ note, folder, setNote, updateFolder, updateNote }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
