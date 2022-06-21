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
        res.json(await this.taskAdapter.update(req.params.id, task));
    }

    // show(){
    // }

    // create() {
    // }

    // delete() {
    // }
}

export const tasksController = new TasksController();
