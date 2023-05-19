import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';

import { adminRouter, matches } from "./admin.js";

const homeRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

homeRouter.get('/', (req, res, next) => {
    // const matches = adminData.matches;
    res.render('home', {
        mtchs: matches,
        pageTitle: 'Home',
        path: '/',
        hasMatches: matches.length > 0,
        activeHome: true,
        matchCSS: true
    });
    console.log(matches)
});

export { homeRouter };