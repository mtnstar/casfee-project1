import {BaseComponent} from "./base-component.js";

export class TasksComponent extends BaseComponent {
    constructor(app) {
        super(app);
        this.tasksService = app.tasksService;
    }

    renderTasks() {
        this.container.innerHTML = this.template('task')();
        // console.log(json);
        // this.tasksService.fetchTasks().then((json) => {
                // const template = Handlebars.compile(document.querySelector("#task-template").innerHTML);
                // const tasksContainer = document.querySelector("#tasks");
                // tasksContainer.innerHTML = template();
                // const tasks = document.querySelector('#tasks');
                // tasks.insertAdjacentHTML('beforebegin', json[0].title);
    }

    action_taskEdit(event) {
        console.log(event);
    }


    initialize() {
        this.renderTasks();
        this.attachEventHandlers();
    }
}
