import {TasksComponent} from './components/tasks-component.js';
import {ToolbarComponent} from './components/toolbar-component.js';
import {TasksService} from './services/tasks-service.js';

class App {
    constructor() {
        this.tasksComponent = new TasksComponent(this);
        this.toolbarComponent = new ToolbarComponent(this);

        this.tasksComponent.initialize();
        this.toolbarComponent.initialize();

        this.initServices();
    }

    initServices() {
        this.tasksService = new TasksService();
    }
}

document.addEventListener("DOMContentLoaded",
    () => new App());
