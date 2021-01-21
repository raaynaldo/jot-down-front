import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useContextMenu } from "react-contexify";
import { updateFolder, deleteFolder } from "../../../../api";
import InputFolderName from "../../../shared/InputFolderName/InputFolderName";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import ModalYesNo from "../../../shared/ModalYesNo/ModalYesNo";

const Folder = ({ id, name, onClick, active, updateActiveFolder }) => {
  const [editName, setEditName] = useState(false);
  const { show } = useContextMenu({
    id: "FolderContextMenu",
    props: {
      setEditNameOn: () => setEditName(true),
      deleteFolder: () => deleteFolderConfirmation(),
    },
  });

  const deleteFolderConfirmation = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ModalYesNo
            onClose={onClose}
            handler={deleteFolderHandler}
          ></ModalYesNo>
        );
      },
    });
  };
  const queryClient = useQueryClient();

  //delete folder
  const { mutateAsync: deleteMutateAsync } = useMutation(deleteFolder);
  const deleteFolderHandler = async () => {
    console.log("yoo");
    await deleteMutateAsync({ id: id });
    await queryClient.invalidateQueries("folders");
    // updateActiveFolder({ id: id });
  };

  //rename folder name
  const { mutateAsync } = useMutation(updateFolder);
  const renameFolderHandler = async (name) => {
    await mutateAsync({ id: id, name: name });
    await queryClient.invalidateQueries("folders");
    updateActiveFolder({ id: id });
  };

  return (
    <div
      className={`pl-3 transform cursor-pointer hover:scale-110 motion-reduce:transform-none ${active}`}
    >
      {editName ? (
        <InputFolderName
          active={editName}
          setDeactive={() => setEditName(false)}
          initialValue={name}
          onSave={renameFolderHandler}
        />
      ) : (
        <div onClick={onClick} onContextMenu={show}>
          {name}
        </div>
      )}
    </div>
  );
};

export default Folder;

// editName ? (
//   <div
//     className={`pl-3 transform cursor-pointer hover:scale-110 motion-reduce:transform-none ${active}`}
//   ></div>
// ) : (
//   <InputFolderName
//     active={editName}
//     setDeactive={() => setEditName(false)}
//   ></InputFolderName>
// );
