export class TaskDecorator {
    constructor(task) {
        this.task = task;
    }

    get id() {
        return this.task.id;
    }

    get duedate() {
        const tomorrow = moment().add(1, 'day').endOf('day')
        const duedate = moment(this.task.duedate);
        if (duedate.isSame(new Date(), "day")) {
            return 'Today'; }
        else if (duedate.isSame(tomorrow, "day")) {
            return 'Tomorrow';
        } else {
            return duedate.fromNow();
        }
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
