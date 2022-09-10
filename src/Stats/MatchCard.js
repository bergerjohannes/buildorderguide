import CivInfoService from '../Uptime/CivInfoService.js'
import MatchCardPlayerResultView from './MatchCardPlayerResultView.js'
import MatchCardMapView from './MatchCardMapView.js'
import Button from '../UI/Button.js'

const MatchCard = (props) => {

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
        <div class='flex flex-col md:flex-row justify-start w-11/12 lg:w-1/2 max-w-2xl rounded-2xl mx-auto my-8 bg-secondary-light shadow-sm py-4 text-main-dark'>
            <MatchCardMapView match={match} />
            <div class='bg-secondary-dark mx-auto my-4 md:my-2 w-11/12 md:w-0.5 h-0.5 md:h-auto rounded-xl'></div>
            <div class='flex space-x-4 justify-start w-full md:w-8/12 px-10'>
                <MatchCardPlayerResultView matchResult={matchResultPlayer0} profile_id={match.players[0].profile_id} name={match.players[0].name} civ={civPlayer0} rating={match.players[0].rating}/>
                <div class='flex flex-col justify-center'><span>vs.</span></div>
                <MatchCardPlayerResultView matchResult={matchResultPlayer1} profile_id={match.players[1].profile_id} name={match.players[1].name} civ={civPlayer1} rating={match.players[1].rating}/>
            </div>
            {props.analysis === undefined && <div class='flex justify-center'><Button>Analyze game</Button></div>}
        </div>
    )
}

export default MatchCard