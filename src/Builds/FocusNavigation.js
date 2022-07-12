import Button from '../UI/Button.js'
import Heading2 from '../UI/Heading2.js'
import BuildData from './BuildData.js'

const FocusNavigation = (props) => {

    return (
        <div class='flex justify-center'>
                <Button disabled={props.step === 0} onClick={props.previousStep}>←</Button>
                <Heading2>{BuildData.getNavigationText(props.step, props.build)}</Heading2>
                <Button disabled={props.step === props.build.length - 1} onClick={props.nextStep}>→</Button>
            </div>
    )

}

export default FocusNavigation
