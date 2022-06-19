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

const StatsOverview = (props) => {
    const { user, logOut } = useUserAuth()
    const [profileId, setProfileId] = useState('')
    const [gameMode, setGameMode] = useState(0)
    const [error, setError] = useState(undefined)
    const [ratings, setRatings] = useState(undefined)
    const [matches, setMatches] = useState(undefined)
    const [civStats, setCivStats] = useState(undefined)
    const [durationStats, setDurationStats] = useState(undefined)

    useEffect(() => {
        DatabaseService.loadProfileInfo(user).then(userData => {
            setProfileId(userData.profile_id)
        })
    }, [user])

    useEffect(() => {
        if (profileId !== undefined) loadMatches()
    }, [profileId, gameMode])

    const loadMatches = () => {
        const matchType = gameMode === 0 ? '1v1' : 'team'

        fetch('https://us-central1-build-order-guide.cloudfunctions.net/getRatings?ranked=true&mode=RM&type=' + matchType + '&profile_id=' + profileId)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error !== undefined) {
                    setError(true)
                } else {
                    const ratingsData = StatsInfoService.prepareRatingsData(responseJson)
                    setRatings(ratingsData)
                }
            }).catch((error) => {
                console.log(`Couldn't load ratings: ${error}`)
                setError(true)
            })

        fetch('https://us-central1-build-order-guide.cloudfunctions.net/getMatches?ranked=true&mode=RM&type=' + matchType + '&profile_id=' + profileId)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error !== undefined) {
                    setError(true)
                } else {
                    const stats = StatsInfoService.getStatsForPlayer(responseJson, profileId)
                    setMatches(responseJson)
                    setCivStats(stats.civs)
                    setDurationStats(stats.durations)
                }
            }).catch((error) => {
                console.log(`Couldn't load matches: ${error}`)
                setError(true)
            })
    }

    const selectStatsOption = (option) => {
        setGameMode(option)
    }

    return (
        <div class='text-center'>
            <Menu />
            <Heading1>1v1 Random Map Stats</Heading1>
            <div class='flex justify-center w-1/4 m-auto'><Switch option1={'Random Map'} option2={'Team RM'} slectedOptionIndex={gameMode} selectOption={selectStatsOption}/></div>
            {ratings === undefined && <LoadingIndicator text={'Loading match data ..'} />}
            {ratings !== undefined && <ParagraphCentered>Showing data for your last 1,000 matches.</ParagraphCentered>}
            {ratings !== undefined && <div class='w-11/12 md:w-1/2 h-56 md:h-96 mx-auto my-12'><RatingsGraph data={ratings}/></div>}
            {durationStats !== undefined && <GameDurationsView data={durationStats}/>}
            {civStats !== undefined && <div class='w-full md:w-1/2 h-56 md:h-96 mx-auto my-12'><CivPerformanceChart data={civStats} /></div>}
            {civStats !== undefined && <div class='w-full md:w-1/2 mx-auto my-12'><CivPerformanceTable data={civStats} /></div>}
            {(gameMode === 0 && matches !== undefined) && matches.map(match => ( // TODO: adapt match cards for team games
                 <MatchCard match={match} profile_id={profileId} />
            ))}
        </div>
    )
}

export default StatsOverview