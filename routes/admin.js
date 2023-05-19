import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';

import { getAddMatch } from '../controllers/matches.js';

const adminRouter = express.Router();
const matches = [];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

adminRouter.get('/add-match', getAddMatch);

adminRouter.post('/add-match', (req, res, next) => {
    matches.push({ title: req.body.title });
    console.log(req.body);
    res.redirect('/');
});

export { adminRouter, matches };
