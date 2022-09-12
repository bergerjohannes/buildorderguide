import _ from 'lodash'
import * as Constants from '../Constants'
import CivInfoService from '../Uptime/CivInfoService'

class ImproveService {

    static analyzeGame = async (gameId, profileId) => {
        return fetch(`https://build-order-guide.ew.r.appspot.com/analyze?gameId=${gameId}&profileId=${profileId}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error !== undefined) {
                    throw new Error(Constants.Error.ErrorAnalyzingGame)
                } else {
                    return responseJson
                }
            })
    }

    static loadMatchesForPlayerWithProfileId = async (profileId) => {
        return fetch(`https://us-central1-build-order-guide.cloudfunctions.net/getMatches?profile_id=${profileId}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error !== undefined) {
                    throw new Error(Constants.Error.LoadingDataUnsuccessful)
                } else {
                    if (responseJson.length === 0) throw new Error(Constants.Error.LoadingDataUnsuccessful)
                    return responseJson
                }
            })
    }

    static loadRatingsDataForPlayer = async (profileId, matchType) => {
        return fetch(`https://us-central1-build-order-guide.cloudfunctions.net/getRatings?ranked=true&mode=RM&type=${matchType}&profile_id=${profileId}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error !== undefined) {
                    throw new Error(Constants.Error.LoadingDataUnsuccessful)
                } else {
                    if (responseJson.length === 0) throw new Error(Constants.Error.LoadingDataUnsuccessful)
                    return ImproveService.prepareRatingsData(responseJson)
                }
            })
    }

    static getFilteredDataSet = (data, gameMode, buildOrder, civ, map) => { //ToDo: Filter for game mode
        const sortedData = data.sort((a, b) => (a.played_at_time > b.played_at_time) ? 1 : -1)
        const filteredData = sortedData.filter(g => g.players[Constants.OfficialAccountDemoProfileId] !== undefined && (buildOrder === Constants.Build.Any || g.players[Constants.OfficialAccountDemoProfileId].build === buildOrder) && (civ === Constants.Civ.Any || g.players[Constants.OfficialAccountDemoProfileId].civ === civ) && (map === Constants.Map.Any || g.map_name === map))
        return filteredData
    }

    static getBuildOrderOptionsFromDataSet = (data) => {
        const allBuildTypes = data.map(g => g.players[Constants.OfficialAccountDemoProfileId].build)
        const dataWithoutDuplicates = [...new Set(allBuildTypes)]
        let buildTypes = dataWithoutDuplicates.map(g => { return { value: g, label: g } })
        buildTypes = _.orderBy(buildTypes, ['value'], ['asc'])
        buildTypes.unshift({ value: Constants.Build.Any, label: Constants.Build.Any })
        return buildTypes
    }

    static getMapOptionsFromDataSet = (data) => {
        const allMaps = data.map(g => g.map_name)
        const dataWithoutDuplicates = [...new Set(allMaps)]
        let maps = dataWithoutDuplicates.map(g => { return { value: g, label: g } })
        maps = _.orderBy(maps, ['value'], ['asc'])
        maps.unshift({ value: Constants.Map.Any, label: Constants.Map.Any })
        return maps
    }

    static getCivOptionsFromDataSet = (data) => {
        const allCivs = data.map(g => g.players[Constants.OfficialAccountDemoProfileId].civ)
        const dataWithoutDuplicates = [...new Set(allCivs)]
        let civs = dataWithoutDuplicates.map(g => { return { value: g, label: g } })
        civs = _.orderBy(civs, ['value'], ['asc'])
        civs.unshift({ value: Constants.Civ.Any, label: Constants.Civ.Any })
        return civs
    }

    static getGameModeOptionsFromDataSet = (data) => {
        return [{ value: Constants.GameMode.Any, label: Constants.GameMode.Any }] // ToDo: Get game mode from data
    }

    static getWinsCountFromData = (data) => {
        return data.filter(g => g.players[Constants.OfficialAccountDemoProfileId].winner === true).length
    }

    static getGEAPMFromData = (data) => {
        return data.map(g => { return { 'valueXAxis': this.toDate(g.played_at_time), 'valueYAxis': g.players[Constants.OfficialAccountDemoProfileId].mean_apm } })
    }

    static getFeudalAgeUptimeFromData = (data) => {
        return data.map(g => { return { 'valueXAxis': this.toDate(g.played_at_time), 'valueYAxis': g.players[Constants.OfficialAccountDemoProfileId].age_up_times['feudal'] } })
    }

    static getCastleAgeUptimeFromData = (data) => {
        return data.map(g => { return { 'valueXAxis': this.toDate(g.played_at_time), 'valueYAxis': g.players[Constants.OfficialAccountDemoProfileId].age_up_times['castle'] } })
    }

    static getImperialAgeUptimeFromData = (data) => {
        return data.map(g => { return { 'valueXAxis': this.toDate(g.played_at_time), 'valueYAxis': g.players[Constants.OfficialAccountDemoProfileId].age_up_times['imperial'] } })
    }

    static toDate = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })
    }

    static getMatchType = (match) => {
        let type = ''
        if (match.starting_age === 0 || match.starting_age === 2) { // Dark Age changed after some patch from 0 to 2
            type += 'RM'
        }
        if (match.num_players === 2) type += ' 1v1'
        else type += ' Team'
        return type
    }

    static getColorForNumber = (number) => {
        return ['Blue', 'Red', 'Green', 'Yellow', 'Cyan', 'Pink', 'Gray', 'Orange'][number - 1]
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

        return data.map(entry => { return { 'valueXAxis': entry.time, 'valueYAxis': entry.Elo } })
    }

    static dayDifference = (d1, d2) => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const diffDays = Math.round(Math.abs((new Date(d1) - new Date(d2)) / oneDay));
        return diffDays
    }

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

    static getDisplayName = (name) => {
        if (name.length <= 30) return name
        else return name.substring(0, 27) + '...'
    }

    static toReadableTime = (seconds) => {
        if (seconds === undefined) return

        let sec = seconds % 60
        let min = parseInt(seconds / 60)
        let hr = 0

        if (min > 60) {
            hr = parseInt(min / 60)
            min = min % 60
        }

        let readableTime = ''
        if (hr > 0) {
            if (hr < 10) {
                readableTime += `0${hr}:`
            } else {
                readableTime += `${hr}:`
            }
        }
        if (min > 0 || hr > 0) {
            if (min < 10) {
                readableTime += `0${min}:`
            } else {
                readableTime += `${min}:`
            }
        }
        if (sec > 0 || min > 0 || hr > 0) {
            if (sec < 10) {
                readableTime += `0${sec}`
            } else {
                readableTime += `${sec}`
            }
        }

        return readableTime
    }

}

export default ImproveService