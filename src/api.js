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

export const getAllNotesByFolderId = async (type, id) => {
  try {
    const response = await axios.get(`/get_notes?type=${type}&id=${id}`);
    return response.data.notes;
  } catch (error) {
    return error.response.message;
  }
};

export const getNote = async (id) => {
  try {
    const response = await axios.get("/get_note/" + id);
    return response.data.note;
  } catch (error) {
    return error.response.message;
  }
};

export const saveNote = async (data) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    await axios.patch("/save_note", data, config);
    return true;
  } catch (error) {
    return error.response.message;
  }
};

export const addNewNote = async (data) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    const response = await axios.post("/add_note", data, config);
    return response.data.note;
  } catch (error) {
    return error.response.message;
  }
};

export const archiveNote = async (data) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    await axios.patch("/archive_note", data, config);
    return true;
  } catch (error) {
    return error.response.message;
  }
};

export const deleteNote = async (data) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    await axios.patch("/delete_note", data, config);
    return true;
  } catch (error) {
    return error.response.message;
  }
};

export const moveNote = async (data) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    await axios.patch("/move_note", data, config);
    return true;
  } catch (error) {
    return error.response.message;
  }
};

export const deletePermanentlyNote = async (data) => {
  try {
    await axios.delete("/delete_permanently_note/" + data.id);
    return true;
  } catch (error) {
    return error.response.message;
  }
};

export const addNoteTag = async (data) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    await axios.post("/add_note_tag/", data, config);
    return true;
  } catch (error) {
    return error.response.message;
  }
};

export const removeNoteTag = async (data) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    await axios.post("/remove_note_tag/", data, config);
    return true;
  } catch (error) {
    return error.response.message;
  }
};

export const createFolder = async (data) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    const response = await axios.post("/create_folder", data, config);
    return response.data.id;
  } catch (error) {
    return error.response.message;
  }
};

export const updateFolder = async (data) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    const response = await axios.patch("/update_folder", data, config);
    return response.data.note;
  } catch (error) {
    return error.response.message;
  }
};

export const deleteFolder = async (data) => {
  try {
    const response = await axios.delete("/delete_folder/" + data.id);
    return response.data.note;
  } catch (error) {
    return error.response.message;
  }
};
