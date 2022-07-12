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
        <div class='flex flex-col'>
            {props.build[props.step].type === Constants.StepType.Decision && <FocusChoiceView build={props.build} goToFocusModeStep={props.goToFocusModeStep}/>}
            {props.build[props.step].type !== Constants.StepType.Decision && <>
                <div class='flex justify-center mb-10'>{BuildData.getTitleForStep(props.build[props.step])}</div>
                <div class='w-8/12 md:w-5/12 lg:w-4/12 m-auto'><FocusWorkerDistributionView build={props.build} step={props.step} /></div>
            </>}
            <FocusNavigation build={props.build} step={props.step} nextStep={props.nextStep} previousStep={props.previousStep} selectChoiceWithIndex={selectChoiceWithIndex} />
        </div>
    )
}

export default FocusView