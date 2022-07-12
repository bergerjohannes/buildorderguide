import BuildData from './BuildData'
import FocusNavigation from './FocusNavigation'

const FocusView = (props) => {
    return (
        <div class='flex flex-col'>
            <div class='flex justify-center mb-10'>{BuildData.getTitleForStep(props.build[props.step])}</div>
            <FocusNavigation build={props.build} step={props.step} nextStep={props.nextStep} previousStep={props.previousStep} />
        </div>
    )
}

export default FocusView