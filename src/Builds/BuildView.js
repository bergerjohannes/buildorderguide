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
import A from '../UI/A'
import ParagraphCentered from '../UI/ParagraphCentered'
import exportForRTSOverlay from './RTSOverlay'

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
            {build.reference !== undefined && ((build.reference.includes('https://') || build.reference.includes('www'))) && <div class='w-fit m-auto'><A href={build.reference}>{build.author}</A></div>}
            {build.reference === undefined || (!build.reference.includes('https://') && !build.reference.includes('www')) && <ParagraphCentered>{build.author}</ParagraphCentered>}
            {build.pop !== undefined && <div class='flex justify-center'><PopIndicator pop={build.pop} /></div>}
            {build.uptime !== undefined && Object.keys(build.uptime).length > 0 && <div class='flex justify-center'><UptimeIndicator uptime={build.uptime} /></div>}
            {build.attributes !== undefined && <div class='flex justify-center'><AttributesView attributes={build.attributes} /></div>}
            {build.difficulty !== undefined && <div class='flex justify-center'><DifficultyIndicator difficulty={build.difficulty} /></div>}
            <div class='flex justify-center ml-20 pl-2'><RatingView rating={props.rating} /></div>
            {props.live && <div class='flex justify-center pt-10'><RatingPrompt currentRating={props.userRating} rateBuild={props.rateBuild} /></div>}
            {props.live && <Button onClick={() => exportForRTSOverlay()}>Export for RTS Overlay</Button>}
            {<div class='flex justify-center'><div class='flex space-x-2 text-main-dark'>{<a href="https://github.com/CraftySalamander/RTS_Overlay"><div class='flex bg-secondary-light pl-1 pr-2 rounded-md'><img class='w-12 h-12' src={require('../Images/rts_overlay-icon-250x250.png')} alt='RTS_Overlay' /><span className='RTS_Overlay'>{"What is RTS Overlay"}</span></div></a>}</div></div>}
            {props.live && <Button onClick={() => setShowFocusMode(true)}>Start Focus Mode</Button>}
            <BuildOrderStepsView build={build.build} />
        </div>
    )
}

export default BuildView