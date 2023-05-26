import express from 'express';

// export { getAddChamp, postAddChamp, getChamps };
import { getAddChamp, postAddChamp, getChamps } from '../controllers/champs.js';

const champRouter = express.Router();

champRouter.get('/champions', getChamps);

export { champRouter };