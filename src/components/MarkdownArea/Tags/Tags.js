import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addNoteTag, removeNoteTag } from "../../../api";
import TagsInput from "react-tagsinput";

import "react-tagsinput/react-tagsinput.css";
import "./Tags.css";

const Tags = (props) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(props.tags);
  }, [props.tags]);

  const queryClient = useQueryClient();
  const { mutateAsync: addMutateAsync } = useMutation(addNoteTag, {
    onSuccess: () => {
      queryClient.invalidateQueries("tags");
    },
  });
  const { mutateAsync: removeMutateAsync } = useMutation(removeNoteTag, {
    onSuccess: () => {
      queryClient.invalidateQueries("tags");
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
      />
    </div>
  );
};

export default Tags;
