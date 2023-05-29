import express from 'express';

import { getAddMatch, postAddMatch } from '../controllers/matches.js';
import { getAddChamp, postAddChamp } from '../controllers/champs.js';

const adminRouter = express.Router();

adminRouter.get('/add-match', getAddMatch);

adminRouter.post('/add-match', postAddMatch);

adminRouter.get('/add-champion', getAddChamp);

adminRouter.post('/add-champion', postAddChamp);

// adminRouter.get('/add-players', getAddPlayers);

export { adminRouter };
