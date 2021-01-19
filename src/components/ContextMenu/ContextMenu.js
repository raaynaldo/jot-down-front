import { useContext } from "react";
import { useMutation, useQuery } from "react-query";
import { Menu, Item, Separator, Submenu } from "react-contexify";
import { FOLDER_TYPES } from "../../constant";
import MainContext from "../../context/main/mainContext";
import "react-contexify/dist/ReactContexify.css";

const ContextMenu = () => {
  const { folderList } = useContext(MainContext);

//   const { mutateAsync } = useMutation(
//     () => saveNote({ note: { id: activeNote.id, body: value } }),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(noteListQueryKey);
//         setTimeout(() => setSaved(false), 3000);
//       },
//     }
//   );

  const archiveHanlder = ({ props }) => {
    console.log(props.id);
  };

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
      <Item onClick={archiveHanlder} disabled={isItemDisabled} data="archive">
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
        {folderList?.map((folder) => (
          <Item
            key={folder.id}
            onClick={handleItemClick}
            data={"Move to " + folder.name}
          >
            {folder.name}
          </Item>
        ))}
      </Submenu>
    </Menu>
  );
};

export default ContextMenu;
