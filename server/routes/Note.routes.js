import { Router } from 'express';
import * as NoteController from '../controllers/Note.controller';

const router = new Router({mergeParams: true});

// Add a new Note
router.route('/notes').post(NoteController.addNote);
// Delete
router.route('/notes/:noteId').delete(NoteController.deleteNote);
// Reneame
router.route('/notes/:noteId').put(NoteController.renameNote);
export default router;
