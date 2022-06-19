import {TaskDecorator} from "../decorators/task-decorator.js";
import {BaseComponent} from "./base-component.js";

export class TasksComponent extends BaseComponent {
    constructor(app) {
        super(app);
        this.tasksService = app.tasksService;
    }

    renderTasks() {
        const taskTemplate = this.template('task');
        this.tasksService.entries.forEach((task) => {
            const decoratedTask = new TaskDecorator(task);
            const renderedTaskEntry = taskTemplate({task: decoratedTask},
                { allowProtoPropertiesByDefault: true });
            this.container.insertAdjacentHTML('beforeend', renderedTaskEntry);
        });
    }

    action_taskEdit(event) {
        console.log(event);
    }

    initialize() {
        this.tasksService.fetchTasks().then(() => {
            console.log(this.tasksService.entries);
            this.renderTasks();
            this.attachEventHandlers();
        });
    }
}
