import {TaskAdapter} from "../adapters/task-adapter.js";

export class TasksController {

    constructor() {
        this.taskAdapter = new TaskAdapter();
    }

    index = async(req, res) => {
        let entries = await this.taskAdapter.all();
        res.json(entries || []);
    }

    // show(){
    // }

    // create() {
    // }

    // delete() {
    // }
}

export const tasksController = new TasksController();
