export class Task {
    constructor(id, title, importance, finished, duedate, description, createdAt) {
        this.id = id;
        this.title = title;
        this.importance = importance;
        this.finished = Boolean(finished);
        this.duedate = new Date(duedate);
        this.description = description;
        this.createdAt = createdAt;
    }

    static fromJSON(json) {
        return new this(
            json.id,
            json.title,
            json.importance,
            json.finished,
            json.duedate,
            json.description,
            json.createdAt);
    }
}
