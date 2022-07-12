import Button from '../UI/Button.js'
import BuildData from './BuildData.js'
import * as Constants from '../Constants'

const FocusNavigation = (props) => {
    const indicesOfChoices = BuildData.getIndicesOfChoicesForBuild(props.build)

    return (
        <div class='flex justify-center w-full md:w-1/2 m-auto'>
            <Button disabled={props.step === 0} onClick={props.build[props.step].type === Constants.StepType.Decision ? () => props.selectChoiceWithIndex(indicesOfChoices[0] - 1) : props.step > 0 && props.build[props.step - 1].type === Constants.StepType.Decision ? () => props.selectChoiceWithIndex(indicesOfChoices[0]) : props.previousStep}>←</Button>
            <span class='text-main-dark font-bold text-2xl flex flex-col justify-center'>{BuildData.getNavigationText(props.step, props.build)}</span>
            <Button disabled={props.step === props.build.length - 1 || props.build[props.step].type === Constants.StepType.Decision || (props.build[props.step + 1].type === Constants.StepType.Decision && indicesOfChoices[0] !== props.step + 1)} onClick={props.nextStep}>→</Button>
        </div>
    )
}

export default FocusNavigation
