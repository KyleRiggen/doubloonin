// import Player from "../models/player.js";

// const getPlayers = (req, res, next) => {
//     Player.fetchAll(
//         res.render('home/players', {
//             playersView: 'test',
//             pageTitle: 'Players List',
//             path: '/players'
//         })
//     );
// };

// export { getPlayers };

import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'

function playerAPI() {
  return new Promise(async (resolve, reject) => {
    let players = [];
    const region = "EUW1";
    const rAPI = new RiotAPI('RGAPI-ce050746-7ff0-4ee4-84c4-519bc9e3ad5e');
    // const rAPI = new RiotAPI(process.env.RIOT_API);

    try {
      const summoner = await rAPI.league.getChallengerByQueue({
        region: PlatformId.EUW1,
        queue: "RANKED_SOLO_5x5"
      });

      for (let player of summoner.entries) {
        players.push({
          "name": player.summonerName,
          "points": player.leaguePoints,
          "region": region
        });
      }

      players.sort((a, b) => b.points - a.points);
      
      resolve(players);
    } catch (error) {
      reject(error);
    }
  });
}

const getPlayers = (req, res, next) => {
  playerAPI()
    .then(players => {
      res.render('home/players', {
        playersView: players,
        pageTitle: 'Players List',
        path: '/players'
      });
    })
    .catch(error => {
      // Handle the error
      console.error(error);
      // Send an error response
      res.status(500).send('Internal Server Error');
    });
};

export { getPlayers };

