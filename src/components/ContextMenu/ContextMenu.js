import { Menu, Item, Separator, Submenu } from "react-contexify";
import { FOLDER_TYPES } from "../../constant";
import "react-contexify/dist/ReactContexify.css";

const ContextMenu = ({ folders }) => {
  //   const folders = [
  //     { id: 1, name: "Main" },
  //     { id: 2, name: "code" },
  //   ];
  const handleItemClick = ({ props, data }) => {
    console.log(props, data);
  };

  const isItemDisabled = ({ props, data }) => {
    if (
      props.folderType === FOLDER_TYPES.folder ||
      props.folderType === FOLDER_TYPES.tag
    ) {
      return data === "unarchive" || data === "restore";
    } else if (props.folderType === FOLDER_TYPES.archived) {
      console.log({ props }, { data });
      return data === "archive" || data === "restore";
    } else if (props.folderType === FOLDER_TYPES.trash) {
      return data === "archive" || data === "unarchived";
    }
  };

  const isMoveToDisabled = ({ props }) => {
    return props.folderType !== FOLDER_TYPES.folder;
  };

  const isDeleteHidden = ({ props, data }) => {
    if (props.folderType === FOLDER_TYPES.trash) {
      return data === "delete";
    } else {
      return data === "permanetly-delete";
    }
  };

  return (
    <Menu id="note-context-menu">
      <Item onClick={handleItemClick} disabled={isItemDisabled} data="archive">
        Archive
      </Item>
      <Item
        onClick={handleItemClick}
        disabled={isItemDisabled}
        data="unarchive"
      >
        Unarchive
      </Item>
      <Separator />
      <Item
        onClick={handleItemClick}
        hidden={isDeleteHidden}
        data="permanetly-delete"
      >
        Permantly Delete
      </Item>
      <Item
        onClick={handleItemClick}
        disabled={isItemDisabled}
        hidden={isDeleteHidden}
        data="delete"
      >
        Delete
      </Item>
      <Item onClick={handleItemClick} disabled={isItemDisabled} data="restore">
        Restore
      </Item>
      <Separator />
      <Submenu label="Move to" disabled={isMoveToDisabled}>
        {folders?.map((folder) => (
          <Item
            key={folder.id}
            onClick={handleItemClick}
            data={"Move to " + folder.name}
          >
            {folder.name}
          </Item>
        ))}
        {/* <Item onClick={handleItemClick} data="Move to Folder A">
          Folder A
        </Item>
        <Item onClick={handleItemClick} data="Move to Folder B">
          Folder B
        </Item> */}
      </Submenu>
    </Menu>
  );
};

export default ContextMenu;
