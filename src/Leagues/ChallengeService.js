import CivInfoService from '../Uptime/CivInfoService'

class ChallengeService {
    static prepareDataForLeagueTable = (data, profileId) => {
        if (data.length === 0) return {}

        CivInfoService.correctCivsForOlderMatches(data)

        let playerData = data.map(match => match.players.filter(player => parseInt(player['profile_id']) === parseInt(profileId))[0])
        const won = playerData.filter(x => x.won === true)

        return [{ players: [{ name: playerData[0]['name'], games: playerData.length, won: won.length, lost: playerData.length - won.length }] }, playerData]
    }
}

export default ChallengeService