import {BaseService} from "./base-service.js";
import {Task} from "../models/task.js";

export class TasksService extends BaseService {

    constructor() {
        super();
        this.orderByAttribute = 'duedate';
        this.filterCompleted = false;
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

    orderTasks(attribute) {
        attribute ||= this.orderByAttribute;
        this.orderByAttribute = attribute;

        this.entries = this.entries.sort((a,b) => {
            if ( a[attribute] < b[attribute] ) {
                return -1;
            }
            if ( a[attribute] > b[attribute] ) {
                return 1;
            }
            return 0;
        })

        if (attribute == 'importance') this.entries = this.entries.reverse();
    }

    toggleFilterCompleted() {
        this.filterCompleted = !this.filterCompleted;
    }
}
