import CivData from './CivData.js'
import * as Constants from '../Constants'

class CivInfoService {
    static getCivilizations() {
        const civs = CivData.civilizations
        const civNames = civs.map(item => item.name)
        return civNames
    }

    static getCivilizationNameForIndex(index) {
        const civs = CivData.civilizations
        const civNames = civs.map(item => item.name)
        return civNames[index]
    }

    static correctCivsForOlderMatches(matches) {
        const releaseDateLordsOfTheWest = 1611680400 // Lords of the West add-on release on 01/26/2021 17:00 UTC
        const releaseDateDawnOfTheDukes = 1628611200 // Dawn of the Dukes add-on release on 08/10/2021 17:00 UTC

        matches.forEach(match => {
            match.players.forEach(player => {
                player.civ = player.civ_alpha
            })
        })

        matches.filter(match => match.started < releaseDateLordsOfTheWest).forEach(match => {
            match.players.forEach(player => {
                if (player.civ >= 4) player.civ++
                if (player.civ >= 29) player.civ++
            })
        })

        matches.filter(match => match.started < releaseDateDawnOfTheDukes).forEach(match => {
            match.players.forEach(player => {
                if (player.civ >= 2) player.civ++
                if (player.civ >= 28) player.civ++
            })
        })
    }

    static getUptime(civ, popFeudal, loom, popCastle, popImperial) {
        let time = 130 // Feudal Age research time
        if (civ === Constants.Civ.Malay) time -= 52 // Malay faster Feudal Age research time

        popFeudal -= 4 // 3 starting villagers + scout
        if (civ === Constants.Civ.Mayans) popFeudal -= 1 // 1 additional starting villager
        if (civ === Constants.Civ.Chinese) popFeudal -= 2 // Chinese have 3 additional villagers but it takes roughly 25 seconds to gather enough food to start building villager number 7

        time += popFeudal * 25

        if (loom === 'Yes' || loom === 1 || loom === true) {
            if (civ === Constants.Civ.Goths) {
                time += 1 // Goths (almost) instant Loom
            } else if (civ === Constants.Civ.Portuguese) {
                time += 19 // Portuguese 30% faster Loom
            } else {
                time += 25
            }
        } else {
            if (civ === Constants.Civ.Mayans) {
                time += 12.5 // If Mayans don't get Loom and all four villagers build one house, Mayans are housed for 12.5 seconds
            }
        }

        const minutesFeudal = (Math.floor(time / 60) < 10) ? '0' + Math.floor(time / 60) : Math.floor(time / 60)
        const secondsFeudal = (time % 60 < 10) ? '0' + Math.floor(time % 60) : Math.floor(time % 60)

        time += 160 // Castle Age research time
        time += popCastle * 25

        if (civ === Constants.Civ.Malay) time -= 64 // Malay faster Castle Age research time
        if (civ === Constants.Civ.Persians) time -= popCastle * 25 * 0.1

        const minutesCastle = (Math.floor(time / 60) < 10) ? '0' + Math.floor(time / 60) : Math.floor(time / 60)
        const secondsCastle = (time % 60 < 10) ? '0' + Math.floor(time % 60) : Math.floor(time % 60)

        time += 190 // Imperial Age research time
        time += popImperial * 25

        if (civ === Constants.Civ.Malay) time -= 76 // Malay faster Imperial Age research time
        if (civ === Constants.Civ.Persians) time -= popImperial * 25 * 0.15

        const minutesImperial = (Math.floor(time / 60) < 10) ? '0' + Math.floor(time / 60) : Math.floor(time / 60)
        const secondsImperial = (time % 60 < 10) ? '0' + Math.floor(time % 60) : Math.floor(time % 60)

        return {
            'feudal': minutesFeudal + ':' + secondsFeudal,
            'castle': minutesCastle + ':' + secondsCastle,
            'imperial': minutesImperial + ':' + secondsImperial
        }
    }
}

export default CivInfoService