import CivInfoService from '../Uptime/CivInfoService.js'
import Button from '../UI/Button.js'
import { useState } from 'react'
import StatsInfoService from './StatsInfoService.js'
import MapInfoService from './MapInfoService.js'
import ImproveService from '../Improve/ImproveService.js'

const MatchColorIndicator = (props) => {
    const color = ImproveService.getColorForNumber(props.number)
    return (
        <div class='flex items-center'>
            <div class='w-4 h-4 text-xs font-bold text-center'>
                <div class={color === 'Blue' ? 'bg-blue-400' : color === 'Red' ? 'bg-red-400' : color === 'Green' ? 'bg-green-400' : color === 'Yellow' ? 'bg-yellow-400' : color === 'Cyan' ? 'bg-cyan-400' : color === 'Pink' ? 'bg-pink-400' : color === 'Gray' ? 'bg-gray-400' : 'bg-orange-400'}>{props.number}</div>
            </div>
        </div>
    )
}

const MatchCardPlayerResultView = (props) => {
    return (
        <div class='flex flex-col items-start pl-4'>
            <div class='flex space-x-2'>
                <MatchColorIndicator number={props.number} />
                <div class='flex flex-col justify-center'><img class='w-5 h-5' src={require('../Images/Civilizations/' + props.civ + '.png')} alt={props.civ} /></div>
                <p class='flex items-center text-xs'>{(props.rating === null) ? '?' : props.rating}</p>
                {props.showMatchResultPerPlayer && <p>{props.won === true ? '👑' : '☠️'}</p>}
                <a class='font-semibold' target='_blank' href={'https://aoe2.net/#profile-' + props.profile_id}>{StatsInfoService.getDisplayName(props.name)}</a>
            </div>
        </div>
    )
}

const MatchCardPlayersView = (props) => {
    const teams = [[], [], [], [], [], [], [], []]
    for (let i = 1; i <= 8; i++) {
        const playersInTeam = props.match.players.filter(p => p.team === i)
        teams[i - 1] = playersInTeam
    }

    return (
        <div class='flex flex-col space-y-4'>
            {teams.filter(t => t.length).map((team, teamIndex) => (
                <div>
                    {(team.length > 0 && props.match.players.length > 2) && <p class='text-center md:text-left md:ml-4 text-lg md:font-bold'>Team {teamIndex + 1} {team.find(p => p.won === true) !== undefined ? '👑' : '☠️'}</p>}
                    {team.map((player, playerIndex) => (
                        <>
                            <MatchCardPlayerResultView won={player.won} showMatchResultPerPlayer={props.match.players.length === 2} profile_id={player.profile_id} name={player.name} civ={CivInfoService.getCivilizationNameForIndex(player.civ)} rating={player.rating} number={player.color} />
                            {(props.match.players.length === 2 && teamIndex === 0) && <p class='pl-4 -mb-4'>vs.</p>}
                        </>
                    ))}
                </div>
            ))}
        </div>
    )
}

const MatchCardMapView = (props) => {
    return (
        <div class='w-full md:w-4/12 pl-4 flex flex-row'>
            <img class='w-20 h-20' src={require('../Images/Maps/' + MapInfoService.getMapImageForId(props.match.map_type))} alt={MapInfoService.getMapNameForId(props.match.map_type)} />
            <div class='flex flex-col justify-center text-left pl-4'>
                <p class='font-semibold'>{MapInfoService.getMapNameForId(props.match.map_type)}</p>
                <p>{props.matchType}</p>
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
            <div class='flex justify-center flex-col col-start-1 col-end-5 text-center'><div>Analysis for <span class='font-bold'>{dataForPlayer.name}</span></div></div>
            <div class='flex justify-center space-x-8 flex-row items-center col-start-1 col-end-5 text-xl'>
                <div class='flex flex-col justify-center items-center'><span>{dataForPlayer.build}</span><span class='text-xs'>Build</span></div>
                <div class='flex flex-col justify-center items-center'><span>{dataForPlayer.mean_apm}</span><span class='text-xs'>geAPM</span></div>
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
    const matchType = ImproveService.getMatchType(match)

    return (
        <div class='flex flex-col justify-start w-11/12 lg:w-1/2 max-w-2xl rounded-2xl mx-auto my-8 bg-secondary-light shadow-sm py-4 text-main-dark'>
            <MatchCardMapView match={match} matchType={matchType} />
            <MatchCardSeparator />
            <MatchCardPlayersView match={props.match} />
            <MatchCardSeparator />
            {props.analysis !== undefined && <MatchCardAnalysisView profileId={props.profile_id} analysis={props.analysis} />}
            {(props.analysis === undefined && isAnalyzing === false) && <div class='flex justify-center'><Button onClick={() => { setIsAnalzing(true); props.analyzeGame(props.match.match_id) }}>Analyze game</Button></div>}
            {(props.analysis === undefined && isAnalyzing === true) && <div class='flex justify-center'>Analyzing game ...</div>}
        </div>
    )
}

export default MatchCard