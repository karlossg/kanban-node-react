const mongoose = require('mongoose');
const { Schema } = mongoose;

const laneSchema = new Schema({
  name: { type: 'String', required: true },
  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
  id: { type: 'String', required: true, unique: true },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Lane', laneSchema);
