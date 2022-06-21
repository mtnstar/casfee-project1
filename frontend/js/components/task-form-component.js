import {Task} from "../models/task.js";
import {BaseComponent} from "./base-component.js";

export class TaskFormComponent extends BaseComponent {
    constructor(app) {
        super(app);
        this.tasksService = app.tasksService;
        Handlebars.registerHelper({
            importanceOptions: () => [1,2,3,4,5],
            duedateValue: (task) => {
                if (task.duedate) {
                    return task.duedate.toISOString().substring(0,10)
                }
            }
        });
    }

    renderForm(taskId) {
        const task = taskId ? this.tasksService.getTask(taskId) : new Task();
        this.container.innerHTML = this.template()({task: task});
        this.attachEventHandlers();
    }

    action_createTask(event) {
        event.preventDefault();
        const form = event.target.form;
        const task = this.taskFromFormData(form);
        this.tasksService.create(task).then(() => {
            this.tasksService.fetchTasks().then(() => {
                this.app.tasksComponent.renderTasks();
            });
        });
    }

    action_updateTask(event) {
        event.preventDefault();
        const form = event.target.form;
        const task = this.taskFromFormData(form);
        this.tasksService.update(task).then(() => {
            this.tasksService.fetchTasks().then(() => {
                this.app.tasksComponent.renderTasks();
            });
        });
    }

    taskFromFormData(form) {
        const id = form.id.value;
        const title = form.title.value;
        const importance = form.importance.value;
        const finished = form.finished.value;
        const duedate = form.duedate.value;
        const description = form.description.value;
        return new Task(id, title, importance, finished, duedate, description);
    }

    initialize() {
    }
}
