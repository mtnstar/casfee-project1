import {BaseComponent} from "./base-component.js";

export class ToolbarComponent extends BaseComponent {
    constructor(app) {
        super(app);
    }

    renderToolbar() {
        this.container.innerHTML = this.template()();
    }

    action_createTask(event) {
        console.log(event);
    }

    initialize() {
        this.renderToolbar();
        this.attachEventHandlers();
    }
}
