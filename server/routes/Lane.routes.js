import { Router } from 'express';
import * as LaneController from '../controllers/Lane.controller';
import noteRouter from './note.routes';

const router = new Router();

// Add a new Lane
router.route('/lanes').post(LaneController.addLane);
// Get all Lanes
router.route('/lanes').get(LaneController.getLanes);
// Delete a lane by laneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);
// Rename LINE
router.route('/lanes/:laneId').put(LaneController.renameLane);

router.use('/lanes/:laneId/', noteRouter);
export default router;
