import axios from "axios";

export const getAllFolders = async () => {
  try {
    const response = await axios.get("/get_folders");
    return response.data.folders;
  } catch (error) {
    return error.response.message;
  }
};

export const getAllTags = async () => {
  try {
    const response = await axios.get("/get_tags");
    return response.data.tags;
  } catch (error) {
    return error.response.message;
  }
};

export const getAllNotesByFolderId = async (id) => {
  try {
    const response = await axios.get("/get_notes_by_folder/" + id);
    return response.data.notes;
  } catch (error) {
    return error.response.message;
  }
};
