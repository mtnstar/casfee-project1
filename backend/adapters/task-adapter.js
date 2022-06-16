import {Task} from "../models/task.js";
import {DbAdapter} from "./db-adapter.js";

export class TaskAdapter extends DbAdapter {

    all() {
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

    create(task) {
        return new Promise((resolve, reject) => {
            this.db.run(`
              INSERT INTO tasks (title, importance, finished, duedate, description)
              VALUES (${task.title}, ${task.importance}, ${task.finished}, ${task.duedate}, ${task.description});
            `);

            resolve();
        })
    }

    update(task) {
        return new Promise((resolve, reject) => {
            this.db.run(`
              UPDATE tasks
              SET title = ${task.title}, importance = ${task.importance},
              finished = ${task.finished}, duedate = ${task.duedate},
              description = ${task.description}
              WHERE id = ${task.id};
            `);

            resolve();
        })
    }

    destroy(task) {
        return new Promise((resolve, reject) => {
            this.db.run(`
                DELETE FROM tasks WHERE id = ${task.id};
            `);

            resolve();
        })
    }

}
