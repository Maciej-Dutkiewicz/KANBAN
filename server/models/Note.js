import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  task: { type: 'String', required: true },
  id: { type: 'String', required: true, unique: true },
});

export default mongoose.model('Note', NoteSchema);
