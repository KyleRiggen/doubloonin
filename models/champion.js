import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const p = path.join(path.join(__dirname, '../', 'data', 'champions.json'));

const getChampsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

export default class Champion {
    constructor(n) {
        this.name = n;
    }

    save() {
        getChampsFromFile(champs => {
            champs.push(this);
            fs.writeFile(p, JSON.stringify(champs), (err) => {
                console.log("err in save method of the champs model: ", err);
            });
        });
    }

    static fetchAll(cb) {
        getChampsFromFile(cb);
    }
}