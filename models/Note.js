const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  task: { type: 'String', required: true },
  id: { type: 'String', required: true, unique: true }
});

mongoose.model('Note', noteSchema);
