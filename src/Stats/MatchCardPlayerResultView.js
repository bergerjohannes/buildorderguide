import StatsInfoService from './StatsInfoService'

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

export default MatchCardPlayerResultView