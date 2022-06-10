import {BaseComponent} from "./base-component.js";

export class TaskFormComponent extends BaseComponent {
    constructor(app) {
        super(app);
    }

    renderForm() {
        this.container.innerHTML = this.template()();
    }

    // action_createTask(event) {
        // console.log(event);
    // }

    initialize() {
        this.renderForm();
        this.attachEventHandlers();
    }
}
