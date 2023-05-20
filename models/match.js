import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const p = path.join(path.join(__dirname, '../', 'data', 'matches.json'));

const getMatchesFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

export default class Match {
    constructor(t) {
        this.title = t;
    }

    save() {
        getMatchesFromFile(matches => {
            matches.push(this);
            fs.writeFile(p, JSON.stringify(matches), (err) => {
                console.log("err in save method of the matches model: ", err);
            });
        });
    }

    static fetchAll(cb) {
        getMatchesFromFile(cb);
    }
}