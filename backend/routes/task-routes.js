import express from 'express';

const router = express.Router();
import {tasksController} from '../controller/tasks-controller.js';

router.get("/", tasksController.index);
// router.post("/", tasksController.create);
// router.get("/:id/", tasksController.show);
// router.delete("/:id/", tasksController.delete);

export const taskRoutes = router;
