import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const dbFilePath = path.join(dirname, 'app.db');

let db;

async function createDB() {
    db = new sqlite3.Database(dbFilePath, (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
    });
}

async function createTasks() {
  await db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      title VARCHAR NOT NULL,
      importance INTEGER DEFAULT 1 NOT NULL,
      finished BOOLEAN DEFAULT false NOT NULL,
      duedate TEXT NOT NULL,
      description VARCHAR
    );
  `);
}

async function insertTask() {
    await db.run(`
      INSERT INTO tasks (title, importance, finished, duedate, description)
      VALUES ("task", 3, false, "15.6.2022", "seeded entry");
  `);
}

async function run() {
    await createDB(); 
    await createTasks();
    await insertTask();
}

run().catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
