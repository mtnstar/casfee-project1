import {BaseService} from "./base-service.js";
import {Task} from "../models/task.js";

export class TasksService extends BaseService {

    constructor() {
        super();
        this.orderBy = 'duedate';
    }

    fetchTasks() {
        return this.request('get', '/api/tasks')
            .then((json) => {
                this.entries = json.map((entry) => {
                    return Task.fromJSON(entry);
                });
            })
            .then(() => {
                this.orderTasks();
            })
    }

    orderTasks(orderBy) {
        if (orderBy) this.orderBy = orderBy;

        this.orderBy_duedate();
    }

    orderByTitle() {
        this.entries = this.entries.sort((a,b) => {
            if ( a.title < b.title ) {
                return -1;
            }
            if ( a.title > b.title ) {
                return 1;
            }
            return 0;
        })
    }

    orderBy_duedate() {
        this.entries = this.entries.sort((a,b) => {
            if ( a.duedate < b.duedate ) {
                return -1;
            }
            if ( a.duedate > b.duedate ) {
                return 1;
            }
            return 0;
        })
    }

    orderByCreatedAt() {
    }

    orderByImporatance() {
    }

    filterCompleted() {
    }
}
