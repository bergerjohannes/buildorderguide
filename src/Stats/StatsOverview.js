import { useUserAuth } from '../Auth/Auth'
import { useEffect, useState } from 'react'
import DatabaseService from '../DatabaseService'
import Menu from '../UI/Menu'
import StatsInfoService from './StatsInfoService'
import MatchCard from './MatchCard'
import RatingsGraph from './RatingsGraph'
import GameDurationsView from './GameDurationView'
import CivPerformanceChart from './CivPerformanceChart'
import CivPerformanceTable from './CivPerformanceTable'
import Heading1 from '../UI/Heading1'
import ParagraphCentered from '../UI/ParagraphCentered'
import LoadingIndicator from '../UI/LoadingIndicator'
import Switch from '../UI/Switch'
import * as Constants from '../Constants'
import ErrorView from '../UI/ErrorView'

const StatsOverview = (props) => {
    const { user, logOut } = useUserAuth()
    const [profileId, setProfileId] = useState(undefined)
    const [matchType, setMatchType] = useState(Constants.MatchType.OneVersusOne)
    const [error, setError] = useState(undefined)
    const [ratings, setRatings] = useState(undefined)
    const [matches, setMatches] = useState(undefined)
    const [civStats, setCivStats] = useState(undefined)
    const [durationStats, setDurationStats] = useState(undefined)

    useEffect(() => {
        DatabaseService.loadProfileInfo(user).then(userData => {
            if (userData.profile_id !== undefined && userData.profile_id !== '') setProfileId(userData.profile_id)
            else setError(Constants.Error.ProfileIdMissing)
        })
    }, [user])

    useEffect(() => {
        if (profileId !== undefined && profileId !== '') loadMatches()
    }, [profileId, matchType])

    const loadMatches = () => {
        fetch('https://us-central1-build-order-guide.cloudfunctions.net/getRatings?ranked=true&mode=RM&type=' + matchType + '&profile_id=' + profileId)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error !== undefined) {
                    setError(Constants.Error.LoadingDataUnsuccessful)
                } else {
                    if (responseJson.length === 0) setError(Constants.Error.LoadingDataUnsuccessful)
                    const ratingsData = StatsInfoService.prepareRatingsData(responseJson)
                    setRatings(ratingsData)
                }
            }).catch((error) => {
                console.log(`Couldn't load ratings: ${error}`)
                setError(Constants.Error.LoadingDataUnsuccessful)
            })

        fetch('https://us-central1-build-order-guide.cloudfunctions.net/getMatches?ranked=true&mode=RM&type=' + matchType + '&profile_id=' + profileId)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error !== undefined) {
                    setError(Constants.Error.LoadingDataUnsuccessful)
                } else {
                    if (responseJson.length === 0) setError(Constants.Error.LoadingDataUnsuccessful)
                    const stats = StatsInfoService.getStatsForPlayer(responseJson, profileId)
                    setMatches(responseJson)
                    setCivStats(stats.civs)
                    setDurationStats(stats.durations)
                }
            }).catch((error) => {
                console.log(`Couldn't load matches: ${error}`)
                setError(Constants.Error.LoadingDataUnsuccessful)
            })
    }

    const selectStatsOption = (option) => {
        if (option === 0) setMatchType(Constants.MatchType.OneVersusOne)
        else setMatchType(Constants.MatchType.Team)
    }

    if (error === Constants.Error.ProfileIdMissing) return (
        <div class='text-center'>
            <Menu />
            <Heading1>1v1 Random Map Stats</Heading1>
            <ErrorView title={'Profile Id missing'} description={'To load your stats, please enter your AoE II Profile Id.'} callToAction={'Add Id'} callToActionLink={'/profile'} />
        </div>
    )

    if (error === Constants.Error.LoadingDataUnsuccessful) return (
        <div class='text-center'>
            <Menu />
            <Heading1>1v1 Random Map Stats</Heading1>
            <ErrorView title={'Error loading data'} description={'Not able to load your data.'} />
        </div>
    )

    if (profileId === undefined) return (
        // Before id is loaded
        <div class='text-center'>
            <Menu />
            <Heading1>1v1 Random Map Stats</Heading1>
        </div>
    )

    return (
        <div class='text-center'>
            <Menu />
            <Heading1>1v1 Random Map Stats</Heading1>
            <Switch option1={'Random Map'} option2={'Team RM'} slectedOptionIndex={matchType === Constants.MatchType.OneVersusOne ? 0 : 1} selectOption={selectStatsOption} />
            {ratings === undefined && <LoadingIndicator text={'Loading match data ..'} />}
            {ratings !== undefined && <ParagraphCentered>Showing data for your last 1,000 matches.</ParagraphCentered>}
            {ratings !== undefined && <div class='w-11/12 md:w-1/2 h-56 md:h-96 mx-auto my-12'><RatingsGraph data={ratings} /></div>}
            {durationStats !== undefined && <GameDurationsView data={durationStats} />}
            {civStats !== undefined && <div class='w-full md:w-1/2 h-56 md:h-96 mx-auto my-12'><CivPerformanceChart data={civStats} /></div>}
            {civStats !== undefined && <div class='w-full md:w-1/2 mx-auto my-12'><CivPerformanceTable data={civStats} /></div>}
            {(matchType === Constants.MatchType.OneVersusOne && matches !== undefined) && matches.map(match => ( // TODO: adapt match cards for team games
                <MatchCard match={match} profile_id={profileId} />
            ))}
        </div>
    )
}

export default StatsOverview