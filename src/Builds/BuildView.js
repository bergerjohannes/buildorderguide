import AttributesView from './AttributesView'
import BuildOrderStepsView from './BuildOrderStepsView'
import DifficultyIndicator from './DifficultyIndicator'
import PopIndicator from './PopIndicator'
import UptimeIndicator from './UptimeIndicator'
import BuildData from './BuildData'
import * as Constants from '../Constants'
import LoadingIndicator from '../LoadingIndicator'

const BuildView = (props) => {
    const build = props.build
    if (build === undefined) return (<LoadingIndicator />)

    const buildTitle = BuildData.getTitleForBuild(build)
    const isOfficialBuild = build.publisher === Constants.OfficialPublisherId

    return (
        <div class='flex flex-col space-y-4'>
            <div class='flex justify-center'>{build.imageURL !== null && build.imageURL !== undefined && <img class='h-32 w-32' src={build.imageURL} alt={(buildTitle)} />}</div>
            <div class='flex justify-center'>{build.imageURL === null || build.imageURL === undefined && <img class='h-32 w-32' src={require('../Images/BuildImagePlaceholder.png')} alt={buildTitle} />}</div>
            <div class='text-center'><h1 class='text-3xl text-gray-600'>{buildTitle}</h1></div>
            <div class='text-center'><p class='text-gray-600'>{build.author}</p></div>
            {build.publisher !== undefined && isOfficialBuild === false && <div class='bg-gray-400 text-white font-semibold text-center rounded-md max-w-xs w-11/12 m-auto'>Community</div>}
            {build.description !== undefined && <div class='m-auto md:max-w-lg w-11/12 text-center'><p class='text-gray-600'>{build.description}</p></div>}
            {build.pop !== undefined && <div class='flex justify-center'><PopIndicator pop={build.pop} /></div>}
            {build.uptime !== undefined && Object.keys(build.uptime).length > 0 && <div class='flex justify-center'><UptimeIndicator uptime={build.uptime} /></div>}
            {build.attributes !== undefined && <div class='flex justify-center'><AttributesView attributes={build.attributes} /></div>}
            {build.difficulty !== undefined && <div class='flex justify-center'><DifficultyIndicator difficulty={build.difficulty} /></div>}
            <BuildOrderStepsView build={build.build}/>
        </div>
    )
}

export default BuildView