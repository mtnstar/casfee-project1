export class BaseComponent {
    constructor(app) {
        this.app = app;
    }

    get componentName() {
        let name = this.constructor.name.replace('Component', '');
        name = name.charAt(0).toLowerCase() + name.slice(1)
        return name;
    }

    get componentId() {
        return '#' + this.componentName;
    }

    get container() {
        return document.querySelector(this.componentId);
    }

    template(name) {
        let templateName = `#${this.componentName}`;
        if(name) templateName = `${templateName}-${name}`;
        templateName = `${templateName}-template`;

        return Handlebars.compile(document.querySelector(templateName).innerHTML);
    }

    attachEventHandlers() {
        const buttons = document.querySelectorAll(`${this.componentId} button`);
        for (const button of buttons) {
            button.addEventListener('click',
                (event) => this.buttonClick(event));
        }
    }

    buttonClick(event) {
        const id = event.target.getAttribute("id");
        const action = `this.action_${id}`;
        eval(action)(event);
    }

    initialize() {
        // implement in subclass
    }
}
