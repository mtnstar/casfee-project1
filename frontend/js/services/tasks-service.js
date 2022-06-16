import {BaseService} from "./base-service.js";

export class TasksService extends BaseService {
    fetchTasks() {
        const myRequest = new Request('/api/tasks');
        return fetch(myRequest)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${ response.status }`);
                }
                return response.json();
            });
    }
}
