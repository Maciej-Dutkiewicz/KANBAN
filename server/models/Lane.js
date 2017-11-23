import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LaneSchema = new Schema({
  name: { type: 'String', required: true },
  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
  id: { type: 'String', required: true, unique: true },
});
LaneSchema.pre('find', function (next) {
  this.populate('notes');
  next();
});
export default mongoose.model('Lane', LaneSchema);
