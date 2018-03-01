const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Lane = mongoose.model('lane');

module.exports = app => {
  app.get('/api/lanes', requireLogin, (req, res) => {
    Lane.find().exec((err, lanes) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ lanes });
    });
  });

  app.post('/api/lanes', requireLogin, (req, res) => {
    if (!req.body.name) {
      res.status(403).end();
    }

    const newLane = new Lane(req.body);

    newLane.notes = [];

    newLane.id = uuid();
    newLane.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(saved);
    });
  });

  app.delete('/api/lanes/:laneId', requireLogin, (req, res) => {
    Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
      if (err) {
        res.status(500).send(err);
      }

      lane.remove(() => {
        res.status(200).end();
      });
    });
  });
};
