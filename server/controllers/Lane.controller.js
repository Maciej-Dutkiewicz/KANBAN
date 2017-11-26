import Lane from '../models/Lane';
import uuid from 'uuid';
import Note from '../models/Note';

export function getSomething(req, res) {
 return res.status(200).end();
}
export function addLane(req, res) {
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
    res.json({ lane: saved });
  });
}

export function getLanes(req, res) {
  Lane.find().exec((err, lanes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lanes });
  });
}
export function deleteLane(req, res) {
  Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }

    lane.notes.forEach(noteId => {
      Note.findOne({ _id: noteId}).exec((err2, note) => {
        if (err2) {
          res.status(500).send(err2);
        }
        note.remove();
      });
    });
    lane.remove(() => {
      res.status(200).end();
    });
  });
}
export function updateLane(req, res) {
  Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }
    lane.set({ name: req.body.name });
    lane.save(() => {
      res.status(200).end();
    });
  });
}
