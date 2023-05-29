import express from 'express';

import { getMatches } from '../controllers/matches.js';
import { getPlayers } from '../controllers/players.js';
import { getPlayer } from '../controllers/player.js';

const homeRouter = express.Router();

homeRouter.get('/', getMatches);

homeRouter.get('/players', getPlayers);

homeRouter.get('/player', getPlayer);

export { homeRouter };