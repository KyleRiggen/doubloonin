import express from 'express';

import { getAddMatch, postAddMatch } from '../controllers/matches.js';

const adminRouter = express.Router();

adminRouter.get('/add-match', getAddMatch);

adminRouter.post('/add-match', postAddMatch);

export { adminRouter };
