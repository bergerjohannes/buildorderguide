import BuildData from './BuildData'
import FocusChoiceView from './FocusChoiceView'
import FocusNavigation from './FocusNavigation'
import FocusWorkerDistributionView from './FocusWorkerDistributionView'
import * as Constants from '../Constants'

const FocusView = (props) => {
    const selectChoiceWithIndex = (index) => {
        props.goToFocusModeStep(index)
    }

    return (
        <div class='h-full'>
            {props.build[props.step].type === Constants.StepType.Decision && <FocusChoiceView build={props.build} goToFocusModeStep={props.goToFocusModeStep}/>}
            {props.build[props.step].type !== Constants.StepType.Decision && <div class='flex justify-center items-center min-h-[150px] md:my-80 mx-4 md:mx-20 text-lg md:text-3xl text-main-dark font-bold text-center'>{BuildData.getTitleForStep(props.build[props.step])}</div>}
            <div class='fixed bottom-40 w-full'><FocusNavigation build={props.build} step={props.step} nextStep={props.nextStep} previousStep={props.previousStep} selectChoiceWithIndex={selectChoiceWithIndex} /></div>
            <div class='fixed bottom-0 w-full'><div class='w-full'><FocusWorkerDistributionView build={props.build} step={props.step} /></div></div>
        </div>
    )
}

export default FocusView