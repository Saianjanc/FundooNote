import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    Title: {type: String, required: true},
    Description: {type: String, required: true}
  },
  {
    timestamps: true
  }
);

export default model('Notes', noteSchema);
