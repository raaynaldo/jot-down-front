import { useState } from "react";

const InputFolderName = ({ active, setDeactive, initialValue, onSave }) => {
  const [value, setValue] = useState(initialValue);
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handler();
    } else if (e.key === "Escape") {
      setValue("");
      setDeactive();
    }
  };

  const handler = () => {
    onSave(value);
    setValue("");
    setDeactive();
  };

  return active ? (
    <>
      <input
        className="w-full px-1.5 text-sm text-black rounded-md shadow-md focus:outline-none"
        onKeyDown={_handleKeyDown}
        onBlur={handler}
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
