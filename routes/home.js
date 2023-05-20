import express from 'express';

import { getMatches } from '../controllers/matches.js';
import { getPlayers } from '../controllers/players.js';

const homeRouter = express.Router();

homeRouter.get('/', getMatches);

homeRouter.get('/players', getPlayers);

export { homeRouter };