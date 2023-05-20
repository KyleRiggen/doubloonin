import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const p = path.join(path.join(__dirname, '../', 'data', 'players.json'));


async function playerAPI(cb) {
    let players = [];
    const rAPI = new RiotAPI('RGAPI-2b07e4bc-2bd8-4f6f-b230-8f8f5ce44bc8');

    // https://github.com/fightmegg/riot-api/blob/master/src/index.ts
    // inner function that is not executed right away
    const summoner = await rAPI.league.getChallengerByQueue({
        region: PlatformId.EUW1,
        queue: "RANKED_SOLO_5x5"
      });

    for (let player of summoner.entries) {
        // console.log(player.summonerName);
        players.push({
            "name": player.summonerName,
            "points": player.leaguePoints
        });
    }

    // players.sort((a, b) => a.points - b.points);
    players.sort((a, b) => b.points - a.points);

    // console.log(players);

    fs.writeFile(p, JSON.stringify(players), (err) => {
        console.log("err in api call for players3: ", err);
    });

    cb(players);
}

const getPlayers = (req, res, next) => {
    playerAPI(players => {
        res.render('players', {
            playersView: players,
            pageTitle: 'Players List',
            path: '/players'
        });
    });
};

export { getPlayers };

