import {TaskAdapter} from "../adapters/task-adapter.js";

export class TasksController {

    constructor() {
        this.taskAdapter = new TaskAdapter;
    }

    async index() {
        let entries = await this.taskAdapter.all();
        console.log(entries);
    }

    show(){
    }

    create() {
    }

    delete() {
    }
}

export const tasksController = new TasksController();
console.log(tasksController.index());
