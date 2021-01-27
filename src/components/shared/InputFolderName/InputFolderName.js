import { useState, useContext } from "react";
import MainContext from "../../../context/main/mainContext";

const InputFolderName = ({ active, setDeactive, initialValue, onSave }) => {
  const { folderList } = useContext(MainContext);
  const [value, setValue] = useState(initialValue);
  const [isExist, setIsExist] = useState(false);
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      close();
    }
  };

  const handleSave = () => {
    if (value === initialValue) {
      close();
      return;
    }

    if (folderList.some((folder) => folder.name === value)) {
      setIsExist(true);
    } else {
      onSave(value);
      close();
    }
  };

  const close = () => {
    setValue("");
    setDeactive();
  };

  return active ? (
    <>
      <input
        className={
          "w-full px-1.5 text-sm text-black rounded-md shadow-md focus:outline-none" +
          (isExist ? " border-red-500 border-2" : "")
        }
        onKeyDown={_handleKeyDown}
        onBlur={close}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (isExist) setIsExist(false);
        }}
        autoFocus
      />
    </>
  ) : null;
};

InputFolderName.defaultProps = {
  active: false,
  initialValue: "",
  onSave: () => console.log("enter hit"),
};

export default InputFolderName;
