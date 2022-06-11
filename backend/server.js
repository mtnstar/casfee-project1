import express from 'express';
import path, {dirname} from 'path';

export const app = express();

import {taskRoutes} from './routes/task-routes.js';

app.use("/api/tasks", taskRoutes);

app.use(express.static(path.resolve('frontend')));
