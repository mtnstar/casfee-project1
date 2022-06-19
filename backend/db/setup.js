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
      description VARCHAR,
      createdAt TEXT NOT NULL
    );
  `);
}

function getRandomDate(from, to) {
    from = from.getTime();
    to = to.getTime();
    return new Date(from + Math.random() * (to - from));
}

async function insertTasks() {
  let importance = 1;
  ['Geburi Sarah', 'Ferien', 'Einkaufen'].forEach((title) => {
    const duedate = getRandomDate(new Date('2022-06-15'), new Date()).toISOString();
    const createdAt = new Date().toISOString();
    db.run(`
      INSERT INTO tasks (title, importance, finished, duedate, description, createdAt)
      VALUES ("${title}", ${importance}, ${Math.random() > 0.5}, "${duedate}", "seeded entry", "${createdAt}");`);
    importance++;
  })
}

async function run() {
    await createDB(); 
    await createTasks();
    await insertTasks();
}

run().catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
