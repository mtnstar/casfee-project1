import {Task} from "../models/task.js";
import {BaseComponent} from "./base-component.js";

export class TasksComponent extends BaseComponent {
    constructor(app) {
        super(app);
        this.tasksService = app.tasksService;
    }

    async renderTasks() {
        await this.tasksService.fetchTasks().then((json) => {
            const taskTemplate = this.template('task');
            json.forEach((entry) => {
                const task = Task.fromJSON(entry);
                const renderedTaskEntry = taskTemplate({task: task});
                this.container.insertAdjacentHTML('beforeend', renderedTaskEntry);
            });
        })
    }

    action_taskEdit(event) {
        console.log(event);
    }


    initialize() {
        this.renderTasks();
        this.attachEventHandlers();
    }
}
