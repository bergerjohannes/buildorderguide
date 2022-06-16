import AttributesView from './AttributesView'
import BuildOrderStepsView from './BuildOrderStepsView'
import DifficultyIndicator from './DifficultyIndicator'
import PopIndicator from './PopIndicator'
import UptimeIndicator from './UptimeIndicator'
import BuildData from './BuildData'
import * as Constants from '../Constants'
import LoadingIndicator from '../LoadingIndicator'
import Heading1 from '../UI/Heading1'

const BuildView = (props) => {
    const build = props.build
    if (build === undefined) return (<LoadingIndicator />)

    const buildTitle = BuildData.getTitleForBuild(build)
    const isOfficialBuild = build.publisher === Constants.OfficialPublisherId

    return (
        <div class='flex flex-col space-y-4'>
            <div class='flex justify-center mt-10 -mb-14'>{build.imageURL !== null && build.imageURL !== undefined && <img class='h-32 w-32' src={build.imageURL} alt={(buildTitle)} />}</div>
            <div class='flex justify-center mt-10 -mb-14'>{build.imageURL === null || build.imageURL === undefined && <img class='h-32 w-32' src={require('../Images/BuildImagePlaceholder.png')} alt={buildTitle} />}</div>
            <div class='text-center'><Heading1>{buildTitle}</Heading1></div>
            <div class='text-center'><p class='text-main-dark -mt-12'>{build.author}</p></div>
            {build.publisher !== undefined && isOfficialBuild === false && <div class='bg-primary-light text-main-dark text-center font-semibold rounded-md max-w-xs w-fit py-1 px-5 m-auto'>Community</div>}
            {build.description !== undefined && <div class='m-auto md:max-w-lg w-11/12 text-center'><p class='text-main-dark'>{build.description}</p></div>}
            {build.pop !== undefined && <div class='flex justify-center'><PopIndicator pop={build.pop} /></div>}
            {build.uptime !== undefined && Object.keys(build.uptime).length > 0 && <div class='flex justify-center'><UptimeIndicator uptime={build.uptime} /></div>}
            {build.attributes !== undefined && <div class='flex justify-center'><AttributesView attributes={build.attributes} /></div>}
            {build.difficulty !== undefined && <div class='flex justify-center'><DifficultyIndicator difficulty={build.difficulty} /></div>}
            <BuildOrderStepsView build={build.build}/>
        </div>
    )
}

export default BuildView