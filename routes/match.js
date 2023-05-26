import express from 'express';

import { getMatches } from '../controllers/matches.js';
import { getPlayers } from '../controllers/players.js';

const matchRouter = express.Router();

matchRouter.get('/', getMatches);

matchRouter.get('/players', getPlayers);

export { matchRouter };