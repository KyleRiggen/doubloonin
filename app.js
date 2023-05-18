import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import express from 'express';
import bodyParser from 'body-parser';
import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

const RIOT_API = process.env.RIOT_API;
(async () => {
    const rAPI = new RiotAPI(RIOT_API);

    // API functions and parameters: https://github.com/fightmegg/riot-api/blob/master/src/index.ts
    const summoner = await rAPI.league.getChallengerByQueue({
        region: PlatformId.EUW1,
        queue: "RANKED_SOLO_5x5",
      });
    console.log(summoner);
    fs.writeFile("json/data.json", JSON.stringify(summoner), (err) => err && console.error(err));
})()


app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>')
});

app.listen(3000);

// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
// https://nodejs.org/en/docs/guides/debugging-getting-started