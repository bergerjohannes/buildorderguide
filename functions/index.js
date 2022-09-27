const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const cors = require('cors')({ origin: true })
var axios = require('axios')
const { user } = require('firebase-functions/lib/providers/auth')

function getURL(call, profile_id, steam_id, ranked, type, mode) {
    let query = 'https://aoe2.net/api/player/' + call + '?game=aoe2de&count=1000'

    if (ranked !== undefined && type !== undefined && mode !== undefined) {
        if (ranked === 'true' && type.toUpperCase() === '1V1' && mode.toUpperCase() === 'RM') query += '&leaderboard_id=3'
        else if (ranked === 'true' && type.toUpperCase() === 'TEAM' && mode.toUpperCase() === 'RM') query += '&leaderboard_id=4'
        else return 'Type and mode combination not supported yet'
    }

    if (profile_id !== undefined && profile_id !== '') {
        query += '&profile_id=' + profile_id
    } else if (steam_id !== undefined && steam_id !== '') {
        query += '&steam_id=' + steam_id
    } else {
        return 'Steam id or profile id needed'
    }

    return query
}

function filterGames(data, ranked, type, mode) {
    if (ranked === 'true' && type === '1v1' && mode.toUpperCase() === 'RM') {
        let ranked1v1Games = data.data.filter(game => game.ranked === true && game.num_players === 2 && (game.starting_age === 0 || game.starting_age === 2)) // Latest patch returns 2 instead of 0
        return ranked1v1Games
    } else if (ranked === 'true' && type === 'team' && mode.toUpperCase() === 'RM') {
        let rankedTeamGames = data.data.filter(game => game.ranked === true && game.num_players > 2 && (game.starting_age === 0 || game.starting_age === 2)) // Latest patch returns 2 instead of 0
        return rankedTeamGames
    } else {
        return 'Not implemented'
    }
}

exports.getMatches = functions.https.onRequest((request, response) => {

    const profile_id = request.query.profile_id
    const steam_id = request.query.steam_id
    const ranked = request.query.ranked
    const type = request.query.type
    const mode = request.query.mode

    let query = getURL('matches', profile_id, steam_id)
    if (query.substring(0, 8) !== 'https://') return response.status(400).json({ error: query })

    cors(request, response, () => {
        axios.get(query)
            .then(result => {
                const filtered = filterGames(result, ranked, type, mode)
                if (filtered === 'Not implemented') return response.status(501).json({ error: 'Not implemented' })
                else return response.send(filtered)
            })
            .catch(error => {
                return response.status(404).json({ error: 'Error calling aoe2.net API' })
            })
    })

})


exports.getRatings = functions.https.onRequest((request, response) => {
    const steam_id = request.query.steam_id
    const profile_id = request.query.profile_id
    const ranked = request.query.ranked
    const type = request.query.type
    const mode = request.query.mode

    let query = getURL('ratinghistory', profile_id, steam_id, ranked, type, mode)
    if (query.substring(0, 8) !== 'https://') return response.status(400).json({ error: query })

    cors(request, response, () => {
        axios.get(query)
            .then(result => {
                let ratings = result.data
                return response.send(ratings)
            })
            .catch(error => {
                return response.status(404).json({ error: 'Error calling aoe2.net API' })
            })
    })

})

exports.aggregateRatings = functions.firestore
    .document('ratings/{docId}')
    .onWrite(async (change, context) => {
        const newRating = change.after.data().rating
        const buildId = change.after.data().build_id

        const db = admin.firestore()
        const buildRatingRef = db.collection('ratings-aggregate').doc(buildId)

        await db.runTransaction(async (transaction) => {
            const buildRatingDoc = await transaction.get(buildRatingRef)

            if (buildRatingDoc.exists) {

                let numberOfRatings = buildRatingDoc.data().number_of_ratings
                let oldRatingTotal = buildRatingDoc.data().avg_rating * buildRatingDoc.data().number_of_ratings

                if (change.before.data() !== undefined) {
                    // If we have a previous data entry -> this is an updated rating
                    const oldRating = change.before.data().rating
                    oldRatingTotal -= oldRating
                } else {
                    numberOfRatings++
                }

                const newAvgRating = (oldRatingTotal + newRating) / numberOfRatings

                transaction.set(buildRatingRef, {
                    avg_rating: newAvgRating,
                    number_of_ratings: numberOfRatings
                })
            } else {
                transaction.set(buildRatingRef, {
                    avg_rating: newRating,
                    number_of_ratings: 1
                })
            }
        })
    })