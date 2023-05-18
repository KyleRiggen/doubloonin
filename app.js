import path from 'path';
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

(async () => {
    const rAPI = new RiotAPI('RGAPI-23004652-3cf8-4bbc-a604-001c24f4a550');

    const summoner = await rAPI.summoner.getBySummonerName({
        region: PlatformId.EUW1,
        summonerName: "Demos Kratos",
      });
    console.log(summoner);
})()


app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>')
});

app.listen(3000);

// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
// https://nodejs.org/en/docs/guides/debugging-getting-started