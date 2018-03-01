const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  task: { type: 'String', required: true },
  id: { type: 'String', required: true, unique: true },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('note', noteSchema);
