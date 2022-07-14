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
import Button from '../UI/Button'
import { useState } from 'react'
import FocusView from './FocusView'

const BuildView = (props) => {
    const [showFocusMode, setShowFocusMode] = useState(false)
    const [focusModeStep, setFocusModeStep] = useState(0)

    const build = props.build
    if (build === undefined) return (<LoadingIndicator />)

    if (showFocusMode) {
        return (
            <div class='h-full'>
                <div class='flex justify-center mt-10 -mb-10'><CivView civ={build.civilization} /></div>
                <div class='text-center'><Heading1>{build.title}</Heading1></div>
                <FocusView build={build.build} step={focusModeStep} nextStep={() => setFocusModeStep(focusModeStep + 1)} previousStep={() => setFocusModeStep(focusModeStep - 1)} goToFocusModeStep={(step) => setFocusModeStep(step)} />
            </div>
        )
    }

    return (
        <div class='flex flex-col space-y-4'>
            <div class='flex justify-center mt-10 -mb-10'><CivView civ={build.civilization} /></div>
            <div class='text-center'><Heading1>{build.title}</Heading1></div>
            <div class='flex justify-center'>{build.imageURL !== null && build.imageURL !== undefined && <img class='h-32 w-32' src={build.imageURL} alt={(build.title)} />}</div>
            <div class='flex justify-center'>{build.imageURL === null || build.imageURL === undefined && <img class='h-32 w-32' src={require('../Images/BuildImagePlaceholder.png')} alt={build.title} />}</div>
            {build.description !== undefined && <div class='m-auto md:max-w-lg w-11/12 text-center'><p class='text-main-dark'>{build.description}</p></div>}
            <div class='text-center'><p class='text-main-dark'>{build.author}</p></div>
            {build.pop !== undefined && <div class='flex justify-center'><PopIndicator pop={build.pop} /></div>}
            {build.uptime !== undefined && Object.keys(build.uptime).length > 0 && <div class='flex justify-center'><UptimeIndicator uptime={build.uptime} /></div>}
            {build.attributes !== undefined && <div class='flex justify-center'><AttributesView attributes={build.attributes} /></div>}
            {build.difficulty !== undefined && <div class='flex justify-center'><DifficultyIndicator difficulty={build.difficulty} /></div>}
            <div class='flex justify-center ml-20 pl-2'><RatingView rating={props.rating} /></div>
            <div class='flex justify-center pt-10'><RatingPrompt currentRating={props.userRating} rateBuild={props.rateBuild} /></div>
            <Button onClick={() => setShowFocusMode(true)}>Start Focus Mode</Button>
            <BuildOrderStepsView build={build.build} />
        </div>
    )
}

export default BuildView