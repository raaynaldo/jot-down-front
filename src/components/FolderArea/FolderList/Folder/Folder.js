import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useContextMenu } from "react-contexify";
import { updateFolder } from "../../../../api";
import InputFolderName from "../../../shared/InputFolderName/InputFolderName";

const Folder = ({ id, name, onClick, active, updateActiveFolder }) => {
  const { show } = useContextMenu({
    id: "FolderContextMenu",
    props: {
      setEditNameOn: () => setEditName(true),
    },
  });
  const [editName, setEditName] = useState(false);

  //rename folder name
  const { mutateAsync } = useMutation(updateFolder);
  const queryClient = useQueryClient();
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
