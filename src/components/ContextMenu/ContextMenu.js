import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Menu, Item, Separator, Submenu } from "react-contexify";
import { FOLDER_TYPES } from "../../constant";
import { archiveNote, deleteNote, moveNote } from "../../api";
import MainContext from "../../context/main/mainContext";
import "react-contexify/dist/ReactContexify.css";

const ContextMenu = () => {
  const { folderList, activeFolder, noteListQueryKey } = useContext(
    MainContext
  );

  const queryClient = useQueryClient();
  const { mutateAsync: archiveMutateAsync } = useMutation(archiveNote);
  const { mutateAsync: deleteMutateAsync } = useMutation(deleteNote);
  const { mutateAsync: moveMutateAsync } = useMutation(moveNote);

  const archiveHandler = async ({ props, data }) => {
    const isArchive = data === "archive";
    await archiveMutateAsync({ id: props.id, archive: isArchive });
    queryClient.invalidateQueries(noteListQueryKey);
  };

  const deleteHandler = async ({ props, data }) => {
    const isdelete = data === "delete";
    await deleteMutateAsync({ id: props.id, delete: isdelete });
    queryClient.invalidateQueries(noteListQueryKey);
  };

  const moveHandler = async ({ props, data }) => {
    await moveMutateAsync({ id: props.id, folder_id: data });
    queryClient.invalidateQueries(noteListQueryKey);
  };

  // How to organize disable and hidden
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
      <Item onClick={archiveHandler} disabled={isItemDisabled} data="archive">
        Archive
      </Item>
      <Item onClick={archiveHandler} disabled={isItemDisabled} data="unarchive">
        Unarchive
      </Item>
      <Separator />
      <Item
        // onClick={handleItemClick}
        hidden={isDeleteHidden}
        data="permanetly-delete"
      >
        Permantly Delete
      </Item>
      <Item
        onClick={deleteHandler}
        disabled={isItemDisabled}
        hidden={isDeleteHidden}
        data="delete"
      >
        Delete
      </Item>
      <Item onClick={deleteHandler} disabled={isItemDisabled} data="restore">
        Restore
      </Item>
      <Separator />
      <Submenu label="Move to" disabled={isMoveToDisabled}>
        {folderList?.map((folder) => {
          if (folder.id !== activeFolder.id)
            return (
              <Item key={folder.id} onClick={moveHandler} data={folder.id}>
                {folder.name}
              </Item>
            );
          else return null;
        })}
      </Submenu>
    </Menu>
  );
};

export default ContextMenu;
