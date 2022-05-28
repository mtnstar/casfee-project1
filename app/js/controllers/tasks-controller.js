import {TasksService} from '../services/tasks-service.js';

export class TasksController {
    constructor() {
        this.tasksService = new TasksService();
    }

    renderTasks() {
        const json = await this.tasksService.fetchTasks();
        console.log(json);
        // this.tasksService.fetchTasks().then((json) => {
                // const template = Handlebars.compile(document.querySelector("#task-template").innerHTML);
                // const tasksContainer = document.querySelector("#tasks");
                // tasksContainer.innerHTML = template();
                // const tasks = document.querySelector('#tasks');
                // tasks.insertAdjacentHTML('beforebegin', json[0].title);
    }

    attachEventHandlers() {
        const buttons = document.querySelectorAll("button");
        for (const button of buttons) {
            button.addEventListener('click',
                (event) => buttonClick(event));
        }
    }

    buttonClick(event) {
        const id = event.target.getAttribute("id");
        const action = `this.action_${id}`;
        eval(action)(event);
    }

    action_taskEdit(event) {
        console.log(event);
    }


    initialize() {
        this.renderTasks();
        this.attachEventHandlers();
    }
}

// create one-and-only instance
document.addEventListener("DOMContentLoaded",
    () => new TasksController().initialize());
