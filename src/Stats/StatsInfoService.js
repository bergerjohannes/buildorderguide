import CivInfoService from '../Uptime/CivInfoService'

class StatsInfoService {
    static getStatsForPlayer = (matches, profile_id) => {

        const numberOfCivs = 39
        let civGames = new Array(numberOfCivs).fill(0)
        let civWins = new Array(numberOfCivs).fill(0)
        let durations = { '< 20': { 'games': 0, 'won': 0 }, '20-30': { 'games': 0, 'won': 0 }, '30-40': { 'games': 0, 'won': 0 }, '> 40': { 'games': 0, 'won': 0 } }

        CivInfoService.correctCivsForOlderMatches(matches)

        matches.forEach((match, index) => {
            const result = match.players.find(player => player.profile_id == profile_id)
            civGames[result.civ] += 1
            if (result.won == 1) civWins[result.civ] += 1

            let gameDuration = (match.finished - match.started) / 60
            let durationBucket

            if (gameDuration < 20) {
                durationBucket = durations['< 20']
            } else if (gameDuration < 30) {
                durationBucket = durations['20-30']
            } else if (gameDuration < 40) {
                durationBucket = durations['30-40']
            } else {
                durationBucket = durations['> 40']
            }
            durationBucket['games'] += 1
            if (result.won == 1) durationBucket['won'] += 1
        })

        let civs = []
        for (let i = 0; i < numberOfCivs; i++) {
            let winPercentage = 'N/A'
            if (civGames[i] > 0) {
                winPercentage = Math.floor(civWins[i] / civGames[i] * 100) + '%'
            }
            civs[i] = { games: civGames[i], wins: civWins[i], winPercentage: winPercentage }
        }

        Object.keys(durations).map((key, index) => {
            let winPercentage = 'N/A'
            if (durations[key].games > 0) {
                winPercentage = Math.floor(durations[key].won / durations[key].games * 100) + '%'
            }
            durations[key]['percentage'] = winPercentage
        })

        return { 'civs': civs, 'durations': durations }
    }

    static prepareRatingsData = (ratings) => {
        let sortedRatings = ratings.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)
        let data = []

        for (let index = 0; index < sortedRatings.length; index++) {
            const data1 = sortedRatings[index]
            data.push({ time: this.toDate(data1.timestamp), Elo: data1.rating })

            if (index + 1 < sortedRatings.length) {
                const data2 = sortedRatings[index + 1]
                const dayDifference = this.dayDifference(data1.timestamp * 1000, data2.timestamp * 1000)

                if (dayDifference > 1) {
                    for (let dayDifferenceFilled = 1; dayDifferenceFilled < dayDifference; dayDifferenceFilled++) {
                        let artificialData = { Elo: data1.rating, time: this.toDate(data1.timestamp + 86400 * dayDifferenceFilled) }
                        data.push(artificialData)
                    }
                }
            }

            if (data.length > 2 && data[data.length - 2].time === data[data.length - 1].time) {
                // Only keep the last entry for a given date
                data.splice(-2, 1)
            }
        }

        return data
    }

    static toDate = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleDateString("en-US", { year: 'numeric', month: 'numeric', day: 'numeric' })
    }

    static dayDifference = (d1, d2) => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const diffDays = Math.round(Math.abs((new Date(d1) - new Date(d2)) / oneDay));
        return diffDays
    }

}

export default StatsInfoService