import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', 'views');

import { adminRouter } from "./routes/admin.js";
import { champRouter } from "./routes/champ.js";
import { homeRouter } from "./routes/home.js";
import { get404 } from './controllers/error.js';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(champRouter);
app.use(homeRouter);

app.use(get404);

app.listen(3000);

// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
// https://nodejs.org/en/docs/guides/debugging-getting-started