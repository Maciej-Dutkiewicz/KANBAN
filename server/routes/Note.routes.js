import { Router } from 'express';
import * as NoteController from '../controllers/Note.controller';

const router = new Router({mergeParams: true});

// Add a new Note
router.route('/notes').post(NoteController.addNote);
// Delete
router.route('/notes/:taskId').delete(NoteController.deleteNote);
// Reneame
router.route('/notes/:taskId').put(NoteController.renameNote);
export default router;
