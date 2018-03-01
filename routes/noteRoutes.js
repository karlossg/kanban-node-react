const mongoose = require('mongoose');
const uuid = require('uuid-v4');

const requireLogin = require('../middlewares/requireLogin');

const Note = mongoose.model('note');

module.exports = app => {
  // app.get('/api/notes', requireLogin, (req, res) => {
  //   Lane.find().exec((err, lanes) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     }
  //     res.json({ lanes });
  //   });
  // });

  app.post('/api/notes', requireLogin, (req, res) => {
    const { note, laneId } = req.body;

    if (!note || !note.task || !laneId) {
      res.status(400).end();
    }

    const newNote = new Note({
      task: note.task
    });

    newNote.id = uuid();
    newNote.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      Lane.findOne({ id: laneId })
        .then(lane => {
          lane.notes.push(saved);
          return lane.save();
        })
        .then(() => {
          res.json(saved);
        });
    });
  });

  app.delete('/api/notes/:noteId', requireLogin, (req, res) => {
    Note.findOne({ id: req.params.noteId }).exec((err, note) => {
      if (err) {
        res.status(500).send(err);
      }

      lane.remove(() => {
        res.status(200).end();
      });
    });
  });
};
