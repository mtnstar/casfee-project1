import {BaseComponent} from "./base-component.js";
import {FilterButtons} from "./toolbar/filter-buttons.js";

export class ToolbarComponent extends BaseComponent {
    constructor(app) {
        super(app);
        this.tasksComponent = app.tasksComponent;
        this.tasksService = app.tasksService;
    }

    renderToolbar() {
        const currentOrder = this.tasksService.orderByAttribute;
        const completedFiltered = this.tasksService.filterCompleted;
        const filterButtons = new FilterButtons(currentOrder, completedFiltered).render();
        this.container.innerHTML = this.template()({filterButtons: filterButtons});
        this.attachEventHandlers();
    }

    action_createTask(event) {
        console.log(event);
    }

    action_orderByTitle() {
        this.tasksService.orderTasks('title');
        this.afterAction();
    }

    action_orderByDuedate() {
        this.tasksService.orderTasks('duedate');
        this.afterAction();
    }

    action_orderByImportance() {
        this.tasksService.orderTasks('importance');
        this.afterAction();
    }

    action_orderByCreatedAt() {
        this.tasksService.orderTasks('createdAt');
        this.afterAction();
    }

    action_filterCompleted() {
        this.tasksService.toggleFilterCompleted();
        this.afterAction();
    }

    afterAction() {
        this.tasksComponent.renderTasks();
        this.renderToolbar();
    }

    initialize() {
        this.renderToolbar();
    }
}
