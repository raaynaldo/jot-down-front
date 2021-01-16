import axios from "axios";
import { FOLDER_TYPES } from "./constant";

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

export const getAllNotesByFolderId = async (type, id) => {
  try {
    let route = "/get_notes_by_folder/" + id;
    if (type === FOLDER_TYPES.archived) {
      route = "/get_notes_in_archived/";
    } else if (type === FOLDER_TYPES.trash) {
      route = "/get_notes_in_trash/";
    } else if (type === FOLDER_TYPES.tag) {
      route = "/get_notes_by_tag/" + id;
    }
    const response = await axios.get(route);
    return response.data.notes;
  } catch (error) {
    return error.response.message;
  }
};