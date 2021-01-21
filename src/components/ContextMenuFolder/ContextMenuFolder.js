import { Menu, Item } from "react-contexify";

const ContextMenuFolder = () => {
  const renameHandler = ({ props }) => {
    props.setEditNameOn();
    console.log(props);
  };

  const deleteHandler = ({ props }) => {
    props.deleteFolder();
  };

  return (
    <Menu id="FolderContextMenu">
      <Item onClick={renameHandler}>Rename</Item>
      <Item onClick={deleteHandler}>Delete</Item>
    </Menu>
  );
};

export default ContextMenuFolder;
