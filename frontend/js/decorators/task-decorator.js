export class TaskDecorator {
    constructor(task) {
        this.task = task;
    }

    get duedate() {
        return moment(this.task.duedate).fromNow();
    }

    get title() {
        return this.task.title;
    }

    get importance() {
        const template = "<i class='fa fa-flash'></i>";
        const content = Array(this.task.importance)
            .fill()
            .map(() => template)
            .join('&nbsp;');
        return new Handlebars.SafeString(content);
    }

    get finished() {
        const label = this.task.finished ? 'Completed' : 'Open';
        const checked = this.task.finished ? 'checked' : '';
        const content = 
            `<div>
              <input ${checked} disabled="disabled" class="check" id="finished" type="checkbox" name="finished" />
              <label class="check" for="finished">${label}</label>
            </div>`
        return new Handlebars.SafeString(content);
    }

    get description() {
        return this.task.description;
    }
}
