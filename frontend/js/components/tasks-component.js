import {TaskDecorator} from "../decorators/task-decorator.js";
import {BaseComponent} from "./base-component.js";

export class TasksComponent extends BaseComponent {
    constructor(app) {
        super(app);
        this.tasksService = app.tasksService;
    }

    renderTasks() {
        this.container.innerHTML = '';
        const taskTemplate = this.template('task');
        this.tasksService.entries.forEach((task) => {
            if (this.hideCompleted(task)) return;

            const decoratedTask = new TaskDecorator(task);
            const renderedTaskEntry = taskTemplate({task: decoratedTask},
                { allowProtoPropertiesByDefault: true });
            this.container.insertAdjacentHTML('beforeend', renderedTaskEntry);
        });
    }

    action_taskEdit(event) {
        console.log(event);
    }

    hideCompleted(task) {
        return this.tasksService.filterCompleted &&
            task.finished;
    }

    initialize() {
        this.tasksService.fetchTasks().then(() => {
            this.renderTasks();
            this.attachEventHandlers();
        });
    }
}
