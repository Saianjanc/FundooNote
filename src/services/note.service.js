import Note from '../models/note.model';

export const createNote = async (body) => {
  const checkNote = await Note.exists(body)
  if (!checkNote){
    const data = await Note.create(body)
    return data;
  } else {
    throw new Error("Note Already Saved!")
  }
};

export const getNotes = async () => {
  const data = await Note.find()
  if (data) {
    return data
  } else {
    throw new Error("No Notes Not Found!")
  }
};