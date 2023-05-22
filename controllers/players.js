import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'

async function playerAPI(cb) {
    let players = [];
    const rAPI = new RiotAPI('RGAPI-2b07e4bc-2bd8-4f6f-b230-8f8f5ce44bc8');

    // https://github.com/fightmegg/riot-api/blob/master/src/index.ts
    // inner function that is not executed right away, so use callback
    const summoner = await rAPI.league.getChallengerByQueue({
        region: PlatformId.EUW1,
        queue: "RANKED_SOLO_5x5"
      });

    for (let player of summoner.entries) {
        players.push({
            "name": player.summonerName,
            "points": player.leaguePoints,
            "region": "EU"
        });
    }

    players.sort((a, b) => b.points - a.points);

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

