import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'

const RIOT_API = process.env.RIOT_API;
(async () => {
    const rAPI = new RiotAPI(RIOT_API);

    // API functions and parameters: https://github.com/fightmegg/riot-api/blob/master/src/index.ts
    const summoner = await rAPI.league.getChallengerByQueue({
        region: PlatformId.EUW1,
        queue: "RANKED_SOLO_5x5",
      });
    console.log(summoner);
    fs.writeFile("../data/players.json", JSON.stringify(summoner), (err) => err && console.error(err));

    
})()