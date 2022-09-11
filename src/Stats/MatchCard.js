import CivInfoService from '../Uptime/CivInfoService.js'
import Button from '../UI/Button.js'
import { useState } from 'react'
import StatsInfoService from './StatsInfoService.js'
import MapInfoService from './MapInfoService.js'

const MatchCardPlayerResultView = (props) => {
    return (
        <div class='flex flex-col items-center'>
            <p>{props.matchResult}</p>
            <div class='flex space-x-2'>
                <div class='flex flex-col justify-center'><img class='w-5 h-5' src={require('../Images/Civilizations/' + props.civ + '.png')} alt={props.civ} /></div>
                <a class='font-semibold' target='_blank' href={'https://aoe2.net/#profile-' + props.profile_id}>{StatsInfoService.getDisplayName(props.name)}</a>
            </div>
            <p>{(props.rating === null) ? '?' : props.rating}</p>
        </div>
    )
}

const MatchCardMapView = (props) => {
    return (
        <div class='w-full md:w-4/12 pl-4 flex flex-row'>
            <img class='w-20 h-20' src={require('../Images/Maps/' + MapInfoService.getMapImageForId(props.match.map_type))} alt={MapInfoService.getMapNameForId(props.match.map_type)} />
            <div class='flex flex-col justify-center text-left pl-4'>
                <p class='font-semibold'>{MapInfoService.getMapNameForId(props.match.map_type)}</p>
                <p>1v1 RM</p>
                <p>{StatsInfoService.toDate(props.match.finished)}</p>
            </div>
        </div>
    )
}

const MatchCardAnalysisView = (props) => {
    const dataForPlayer = props.analysis.players[props.profileId]
    if (dataForPlayer === undefined) return (<></>)
    return (

        <div class='grid overflow-hidden grid-cols-4 grid-rows-3 gap-4'>
            <div class='box col-start-1 col-end-5 text-center text-lg'>Analysis for <span class='font-bold'>{dataForPlayer.name}</span></div>
            <div class='flex justify-around flex-row items-center col-start-1 col-end-5 text-xl'>
                <div class='flex flex-col justify-center items-center'><span>{dataForPlayer.build}</span><span class='text-xs'>Build</span></div>
                <div class='flex flex-col justify-center items-center'><span>{dataForPlayer.mean_apm}</span><span class='text-xs'>Mean geAPM</span></div>
            </div>
            {dataForPlayer.age_up_times !== undefined && <div class='flex justify-around col-start-1 col-end-5'>
                {dataForPlayer.age_up_times.feudal !== undefined && <p class='flex justify-center items-center flex-col'><span >{StatsInfoService.toReadableTime(dataForPlayer.age_up_times.feudal)}</span><span class='text-xs'>Feudal</span></p>}
                {dataForPlayer.age_up_times.castle !== undefined && <p class='flex justify-center items-center flex-col'><span>{StatsInfoService.toReadableTime(dataForPlayer.age_up_times.castle)}</span><span class='text-xs'>Castle</span></p>}
                {dataForPlayer.age_up_times.imperial !== undefined && <p class='flex justify-center items-center flex-col'><span>{StatsInfoService.toReadableTime(dataForPlayer.age_up_times.imperial)}</span><span class='text-xs'>Imperial</span></p>}
            </div>}
        </div>
    )
}

const MatchCardSeparator = (props) => {
    return <div class='bg-secondary-dark mx-auto my-4 w-11/12 h-0.5 rounded-xl'></div>
}

const MatchCard = (props) => {

    const [isAnalyzing, setIsAnalzing] = useState(false)

    const match = props.match
    const profileId = props.profileId

    if (profileId !== undefined && match.players[0].profile_id != profileId) {
        const players = [match.players[1], match.players[0]]
        match.players = players
    }

    const player0WonInfo = match.players[0].won
    const player1WonInfo = match.players[1].won

    let matchResultPlayer0 = ''
    let matchResultPlayer1 = ''

    if (player0WonInfo !== null && player1WonInfo !== null) {
        if (player0WonInfo === true) {
            matchResultPlayer0 = '👑'
            matchResultPlayer1 = '☠️'
        } else {
            matchResultPlayer0 = '☠️'
            matchResultPlayer1 = '👑'
        }
    }

    const civPlayer0 = CivInfoService.getCivilizationNameForIndex(match.players[0].civ) !== undefined ? CivInfoService.getCivilizationNameForIndex(match.players[0].civ) : 'Unknown'
    const civPlayer1 = CivInfoService.getCivilizationNameForIndex(match.players[1].civ) !== undefined ? CivInfoService.getCivilizationNameForIndex(match.players[1].civ) : 'Unknown'

    return (
        <div class='flex flex-col justify-start w-11/12 lg:w-1/2 max-w-2xl rounded-2xl mx-auto my-8 bg-secondary-light shadow-sm py-4 text-main-dark'>
            <MatchCardMapView match={match} />
            <MatchCardSeparator />
            <div class='flex space-x-4 justify-center w-full px-10'>
                <MatchCardPlayerResultView matchResult={matchResultPlayer0} profile_id={match.players[0].profile_id} name={match.players[0].name} civ={civPlayer0} rating={match.players[0].rating} />
                <div class='flex flex-col justify-center'><span>vs.</span></div>
                <MatchCardPlayerResultView matchResult={matchResultPlayer1} profile_id={match.players[1].profile_id} name={match.players[1].name} civ={civPlayer1} rating={match.players[1].rating} />
            </div>
            <MatchCardSeparator />
            {props.analysis !== undefined && <MatchCardAnalysisView profileId={props.profile_id} analysis={props.analysis} />}
            {(props.analysis === undefined && isAnalyzing === false) && <div class='flex justify-center'><Button onClick={() => { setIsAnalzing(true); props.analyzeGame(props.match.match_id) }}>Analyze game</Button></div>}
            {(props.analysis === undefined && isAnalyzing === true) && <div class='flex justify-center'>Analyzing game ...</div>}
        </div>
    )
}

export default MatchCard