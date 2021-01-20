import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Menu, Item, Separator, Submenu } from "react-contexify";
import { FOLDER_TYPES } from "../../constant";
import {
  archiveNote,
  deleteNote,
  moveNote,
  deletePermanentlyNote,
} from "../../api";
import MainContext from "../../context/main/mainContext";
import "react-contexify/dist/ReactContexify.css";

const ContextMenu = () => {
  const {
    folderList,
    activeFolder,
    noteListQueryKey,
    updateActiveNote,
  } = useContext(MainContext);

  const queryClient = useQueryClient();
  const { mutateAsync: archiveMutateAsync } = useMutation(archiveNote);
  const { mutateAsync: deleteMutateAsync } = useMutation(deleteNote);
  const { mutateAsync: moveMutateAsync } = useMutation(moveNote);
  const { mutateAsync: deletePermanentlyMutateAsync } = useMutation(
    deletePermanentlyNote
  );

  const archiveHandler = async ({ props, data }) => {
    const isArchive = data === "archive";
    await archiveMutateAsync({ id: props.id, archive: isArchive });
    afterHandling();
  };

  const deleteHandler = async ({ props, data }) => {
    const isdelete = data === "delete";
    await deleteMutateAsync({ id: props.id, delete: isdelete });
    afterHandling();
  };

  const moveHandler = async ({ props, data }) => {
    await moveMutateAsync({ id: props.id, folder_id: data });
    afterHandling();
  };

  const deletePermanentlyHandler = async ({ props }) => {
    console.log(props.id)
    await deletePermanentlyMutateAsync({ id: props.id });
    afterHandling();
  };

  const afterHandling = () => {
    queryClient.invalidateQueries(noteListQueryKey);
    updateActiveNote({ id: 0, active: false });
  };

  // How to organize disable and hidden
  const isItemDisabled = ({ props, data }) => {
    if (
      props.folderType === FOLDER_TYPES.folder ||
      props.folderType === FOLDER_TYPES.tag
    ) {
      return data === "unarchive" || data === "restore";
    } else if (props.folderType === FOLDER_TYPES.archived) {
      return data === "archive" || data === "restore";
    } else if (props.folderType === FOLDER_TYPES.trash) {
      return data === "archive" || data === "unarchive";
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
        onClick={deletePermanentlyHandler}
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
