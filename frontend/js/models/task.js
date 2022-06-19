export class Task {
    constructor(id, title, importance, finished, duedate, description) {
        this.id = id;
        this.title = title;
        this.importance = importance;
        this.finished = Boolean(finished);
        this.duedate = duedate;
        this.description = description;
    }

    static fromJSON(json) {
        return new this(
            json.id,
            json.title,
            json.importance,
            json.finished,
            json.duedate,
            json.description);
    }
}
