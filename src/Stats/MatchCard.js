import StatsInfoService from './StatsInfoService.js'
import MapInfoService from './MapInfoService.js'
import CivInfoService from '../Uptime/CivInfoService.js'

const MatchCard = (props) => {

    const getDisplayName = (name) => {
        if (name.length <= 20) return name
        else return name.substring(0, 17) + '...'
    }

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
        <div class='flex justify-start w-1/2 rounded-2xl mx-auto my-8 bg-slate-50 shadow-sm py-4 text-main-dark'>
            <div class='flex flex-col justify-center w-4/12 pl-4'>
                <div class='flex'>
                    <img class='w-20 h-20' src={require('../Images/Maps/' + MapInfoService.getMapImageForId(match.map_type))} alt={MapInfoService.getMapNameForId(match.map_type)} />
                    <div class='flex flex-col justify-center'>
                        <p>{MapInfoService.getMapNameForId(match.map_type)}</p>
                        <p>1v1 RM</p>
                        <p>{StatsInfoService.toDate(match.finished)}</p>
                    </div>
                </div>
            </div>

            <div class='bg-slate-200 my-2 w-0.5'></div>

            <div class='flex space-x-8 justify-center w-8/12'>
                <div class='flex flex-col'>
                    <p>{matchResultPlayer0}</p>
                    <div class='flex space-x-2'>
                        <div class='flex flex-col justify-center'><img class='w-5 h-5' src={require('../Images/Civilizations/' + civPlayer0 + '.png')} alt={civPlayer0} /></div>
                        <a target='_blank' href={'https://aoe2.net/#profile-' + match.players[0].profile_id}>{getDisplayName(match.players[0].name)}</a>
                    </div>
                    <p>{(match.players[0].rating === null) ? '?' : match.players[0].rating}</p>
                </div>

                <div class='flex flex-col justify-center'>
                    <span>vs.</span>
                </div>

                <div class='flex flex-col'>
                    <p>{matchResultPlayer1}</p>
                    <div class='flex space-x-2'>
                        <div class='flex flex-col justify-center'><img class='w-5 h-5' src={require('../Images/Civilizations/' + civPlayer1 + '.png')} alt={civPlayer1} /></div>
                        <a target='_blank' href={'https://aoe2.net/#profile-' + match.players[1].profile_id}>{getDisplayName(match.players[1].name)}</a>
                    </div>
                    <p>{(match.players[1].rating === null) ? '?' : match.players[1].rating}</p>
                </div>
            </div>
        </div>
    )
}

export default MatchCard