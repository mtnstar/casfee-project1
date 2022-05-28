export class TasksService {
    fetchTasks() {
        const myRequest = new Request('http://localhost:3000/tasks.json');
        fetch(myRequest)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${ response.status }`);
                }
                return response.json();
            });
    }
}
