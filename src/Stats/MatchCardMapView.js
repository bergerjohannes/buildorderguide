import MapInfoService from './MapInfoService'
import StatsInfoService from './StatsInfoService'

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

export default MatchCardMapView