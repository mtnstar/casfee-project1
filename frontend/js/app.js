import {TasksComponent} from './components/tasks-component.js';
import {ToolbarComponent} from './components/toolbar-component.js';
import {TaskFormComponent} from './components/task-form-component.js';
import {TasksService} from './services/tasks-service.js';

class App {
    constructor() {
        this.initServices();

        this.tasksComponent = new TasksComponent(this);
        this.toolbarComponent = new ToolbarComponent(this);
        this.taskFormComponent = new TaskFormComponent(this);

        this.tasksComponent.initialize();
        this.toolbarComponent.initialize();
        this.taskFormComponent.initialize();
    }

    initServices() {
        this.tasksService = new TasksService();
    }
}

document.addEventListener("DOMContentLoaded",
    () => new App());
