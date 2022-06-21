import {TaskAdapter} from "../adapters/task-adapter.js";
import {Task} from "../models/task.js";

export class TasksController {

    constructor() {
        this.taskAdapter = new TaskAdapter();
    }

    index = async(req, res) => {
        let entries = await this.taskAdapter.all();
        res.json(entries || []);
    }

    update = async(req, res) => {
        const task = Task.fromJSON(req.body.task);
        await this.taskAdapter.update(req.params.id, task);
        res.json([{task: task}]);
    }

    create = async(req, res) => {
        const task = Task.fromJSON(req.body.task);
        await this.taskAdapter.create(task);
        res.json([{task: task}]);
    }

    // show(){
    // }

    // delete() {
    // }
}

export const tasksController = new TasksController();
