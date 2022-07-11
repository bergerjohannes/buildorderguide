import AttributesView from './AttributesView'
import BuildOrderStepsView from './BuildOrderStepsView'
import DifficultyIndicator from './DifficultyIndicator'
import PopIndicator from './PopIndicator'
import UptimeIndicator from './UptimeIndicator'
import LoadingIndicator from '../UI/LoadingIndicator'
import Heading1 from '../UI/Heading1'
import CivView from '../UI/CivView'
import RatingView from '../UI/RatingView'
import RatingPrompt from '../UI/RatingPrompt'

const BuildView = (props) => {
    const build = props.build
    if (build === undefined) return (<LoadingIndicator />)

    return (
        <div class='flex flex-col space-y-4'>
            <div class='flex justify-center mt-10'>{build.imageURL !== null && build.imageURL !== undefined && <img class='h-32 w-32' src={build.imageURL} alt={(build.title)} />}</div>
            <div class='flex justify-center mt-10'>{build.imageURL === null || build.imageURL === undefined && <img class='h-32 w-32' src={require('../Images/BuildImagePlaceholder.png')} alt={build.title} />}</div>
            <div class='flex justify-center'><CivView civ={build.civilization} /></div>
            <div class='text-center'><Heading1>{build.title}</Heading1></div>
            <div class='text-center'><p class='text-main-dark -mt-12'>{build.author}</p></div>
            {build.description !== undefined && <div class='m-auto md:max-w-lg w-11/12 text-center'><p class='text-main-dark'>{build.description}</p></div>}
            {build.pop !== undefined && <div class='flex justify-center'><PopIndicator pop={build.pop} /></div>}
            {build.uptime !== undefined && Object.keys(build.uptime).length > 0 && <div class='flex justify-center'><UptimeIndicator uptime={build.uptime} /></div>}
            {build.attributes !== undefined && <div class='flex justify-center'><AttributesView attributes={build.attributes} /></div>}
            {build.difficulty !== undefined && <div class='flex justify-center'><DifficultyIndicator difficulty={build.difficulty} /></div>}
            <div class='flex justify-center ml-20 pl-2'><RatingView rating={props.rating} /></div>
            <div class='flex justify-center pt-10'><RatingPrompt currentRating={props.userRating} rateBuild={props.rateBuild} /></div>
            <BuildOrderStepsView build={build.build}/>
        </div>
    )
}

export default BuildView