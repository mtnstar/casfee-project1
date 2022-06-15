import {Task} from "../models/task.js";
import {DbAdapter} from "./db-adapter.js";

export class TaskAdapter extends DbAdapter {

    all(){
        return new Promise((resolve, reject) => {
            let entries = [];
            this.db.all('SELECT * FROM tasks', [], (err,rows) => {
                if(err) {
                    return console.error(err.message);
                }
                rows.forEach((row) => {
                    let entry = new Task(
                        row['id'],
                        row['title'],
                        row['importance'],
                        row['finished'],
                        row['duedate'],
                        row['description']);
                    entries.push(entry);
                });

                resolve(entries);
            })
        })
    }
}
