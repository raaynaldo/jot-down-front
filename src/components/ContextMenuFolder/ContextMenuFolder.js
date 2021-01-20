import { Menu, Item } from "react-contexify";

const ContextMenuFolder = () => {
  function handleItemClick({ event, props, triggerEvent, data }) {
    console.log(event, props, triggerEvent, data);
  }

  const renameHandler = ({ props }) => {
    props.setEditNameOn();
    console.log(props);
  };

  return (
    <Menu id="FolderContextMenu">
      <Item onClick={renameHandler}>Rename</Item>
      <Item onClick={handleItemClick}>Delete</Item>
    </Menu>
  );
};

export default ContextMenuFolder;
