import { Menu, Item } from "react-contexify";

const ContextMenuFolder = () => {
  const renameHandler = ({ props }) => {
    props.setEditNameOn();
    console.log(props);
  };

  const deleteHandler = ({ props }) => {
    props.deleteFolder();
  };

  const isItemDisabled = ({ props }) => {
    return props.folderName === "Main";
  };

  return (
    <Menu id="FolderContextMenu">
      <Item onClick={renameHandler} disabled={isItemDisabled}>
        Rename
      </Item>
      <Item onClick={deleteHandler} disabled={isItemDisabled}>
        Delete
      </Item>
    </Menu>
  );
};

export default ContextMenuFolder;
