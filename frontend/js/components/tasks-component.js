import {Task} from "../models/task.js";
import {TaskDecorator} from "../decorators/task-decorator.js";
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
                const decoratedTask = new TaskDecorator(task);
                const renderedTaskEntry = taskTemplate({task: decoratedTask},
                    { allowProtoPropertiesByDefault: true });
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
