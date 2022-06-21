import {BaseComponent} from "./base-component.js";
import {FilterButtons} from "./toolbar/filter-buttons.js";

export class ToolbarComponent extends BaseComponent {
    constructor(app) {
        super(app);
        this.tasksComponent = app.tasksComponent;
        this.tasksService = app.tasksService;
        this.taskForm = app.taskFormComponent;
    }

    renderToolbar() {
        const currentOrder = this.tasksService.orderByAttribute;
        const completedFiltered = this.tasksService.filterCompleted;
        const filterButtons = new FilterButtons(currentOrder, completedFiltered).render();
        this.container.innerHTML = this.template()({filterButtons: filterButtons});
        this.attachEventHandlers();
    }

    action_createTask(event) {
        this.taskForm.renderForm();
    }

    action_orderByTitle() {
        this.tasksService.orderTasks('title');
        this.reloadTasks();
    }

    action_orderByDuedate() {
        this.tasksService.orderTasks('duedate');
        this.reloadTasks();
    }

    action_orderByImportance() {
        this.tasksService.orderTasks('importance');
        this.reloadTasks();
    }

    action_orderByCreatedAt() {
        this.tasksService.orderTasks('createdAt');
        this.reloadTasks();
    }

    action_filterCompleted() {
        this.tasksService.toggleFilterCompleted();
        this.reloadTasks();
    }

    reloadTasks() {
        this.tasksComponent.renderTasks();
        this.renderToolbar();
    }

    initialize() {
        this.renderToolbar();
    }
}
