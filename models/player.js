import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api'

export default async function playerAPI() {
  // const rAPI = new RiotAPI('RGAPI-ce050746-7ff0-4ee4-84c4-519bc9e3ad5e');
  const rAPI = new RiotAPI(process.env.RIOT_API);

  try {
      const summoner = await rAPI.summoner.getBySummonerName({
        region: PlatformId.NA1,
        summonerName: "Senna af",
      });
      return summoner;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export { playerAPI };