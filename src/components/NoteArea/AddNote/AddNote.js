import { useContext } from "react";
import MainContext from "../../../context/main/mainContext";
import { useMutation, useQueryClient } from "react-query";
import { addNewNote } from "../../../api";
import { FaPencilAlt } from "react-icons/fa";

const AddNote = () => {
  const { activeFolder, noteListQueryKey, updateActiveNote } = useContext(
    MainContext
  );

  // const { mutateAsync } = useMutation(() => {
  //   addNewNote({ type: activeFolder.type, id: activeFolder.id });
  // }, {onSuccess: () => {
  //     console.log("WHY?")
  // }});
  const queryClient = useQueryClient();
  const handleClick = async () => {
    // await mutateAsync();
    const res = await addNewNote({
      type: activeFolder.type,
      id: activeFolder.id,
    });
    await queryClient.invalidateQueries(noteListQueryKey);
    updateActiveNote({
      id: res.id,
      active: true,
      dataLoaded: false,
    });
  };

  return (
    <div onClick={handleClick} id="create-note-btn">
      <FaPencilAlt className="transform cursor-pointer hover:scale-110 motion-reduce:transform-none" />
    </div>
  );
};

export default AddNote;
