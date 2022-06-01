export class BaseComponent {
    constructor(app) {
        this.app = app;
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

    initialize() {
        throw new Error("override in subclass");
    }
}
