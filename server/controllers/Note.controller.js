import Note from '../models/Note';
import uuid from 'uuid';
import Lane from '../models/Lane';

export function getSomething(req, res) {
  return res.status(200).end();
}
export function addNote(req, res) {
  if (!req.body.task) {
    res.status(403).end();
  }

  const newNote = new Note(req.body);

  newNote.id = uuid();
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({id: req.params.laneId}, (err, lane) => {
      lane.notes.push(saved);
      lane.save((err, laneSaved) => {
        if (err) {
          res.status(500).send(err);
        }

        return res.json({note: saved});
      });
    });
  });
}
export function updateNote(req, res) {
  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }
    note.set({ task: req.body.task });
    note.save(() => {
      res.status(200).end();
    });
  });
}

export function deleteNote(req, res) {
  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }

    note.remove(() => {
      res.status(200).end();
    });
  });
}
