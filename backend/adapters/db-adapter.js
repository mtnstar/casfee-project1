import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

export class DbAdapter {

    get db() {
        return this.dbc ||= this.dbConnect();
    }

    dbConnect() {
        const filename = fileURLToPath(import.meta.url);
        const dirname = path.dirname(filename);
        const dbFilePath = path.join(dirname, '../db/app.db');

        let db = new sqlite3.Database(dbFilePath, (err) => {
            if (err) {
                console.log("Getting error " + err);
                exit(1);
            }
        });

        return db;
    }

}
