import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addNoteTag, removeNoteTag } from "../../../api";
import TagsInput from "react-tagsinput";

import "react-tagsinput/react-tagsinput.css";
import "./Tags.css";

const Tags = (props) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(props.data.tags.map((tag) => tag.name));
  }, [props.data]);

  const queryClient = useQueryClient();
  const { mutateAsync: addMutateAsync } = useMutation(addNoteTag, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("tags");
      // await queryClient.invalidateQueries(["note", props.noteId])
    },
  });
  const { mutateAsync: removeMutateAsync } = useMutation(removeNoteTag, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("tags");
      // await queryClient.invalidateQueries(["note", props.noteId])
    },
  });

  const tagsChangeHandler = (updatedTags, updatedTag) => {
    if (updatedTags.length > tags.length) {
      addMutateAsync({ id: props.noteId, name: updatedTag[0] });
    } else {
      removeMutateAsync({ id: props.noteId, name: updatedTag[0] });
    }
    const lowerCaseTags = updatedTags.map((tag) => tag.toLowerCase());
    setTags(lowerCaseTags);
  };
  return (
    <div>
      <TagsInput
        value={tags}
        onChange={tagsChangeHandler}
        maxTags={5}
        onlyUnique={true}
        inputProps={{
          className: "react-tagsinput-input",
          placeholder: "Add a tag",
        }}
        disabled={props.disabled}
      />
    </div>
  );
};

export default Tags;
