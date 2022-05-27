import CivInfoService from '../Uptime/CivInfoService'

const CivPerformanceTable = (props) => {
    return (
        <div>
            <div class='flex'>
                <p class='w-1/2 text-left ml-12'><strong>Civ</strong></p>
                <p class='w-1/6 text-center'><strong>Games</strong></p>
                <p class='w-1/6 text-center'><strong>Wins</strong></p>
                <p class='w-1/6 text-center'><strong>Rate</strong></p>
            </div>
            {props.data.map((stat, index) => (
                <div class='flex text-center space-y-2'>
                    <div class='flex w-1/2 ml-12'><img class='w-5 h-5 mr-2' src={require('../Images/Civilizations/' + CivInfoService.getCivilizationNameForIndex(index) + '.png')} alt={CivInfoService.getCivilizationNameForIndex(index)} /><p>{CivInfoService.getCivilizationNameForIndex(index)}</p></div>
                    <p class='w-1/6'>{stat.games}</p>
                    <p class='w-1/6'>{stat.wins}</p>
                    <p class='w-1/6'>{stat.winPercentage}</p>
                </div>
            ))}
        </div>
    )
}

export default CivPerformanceTable