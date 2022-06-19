import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import Input from '../../UI/Input'

const BuildStepCustom = (props) => {

    const handleTextChange = (event) => {
        update(event.target.value)
    }

    const update = (text) => {
        props.update(props.index, {
            type: Constants.StepType.Custom,
            text: text
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderText>Custom step:</BuilderText>
            <Input value={props.step.text} onChange={handleTextChange} />
        </div>
    )
}

export default BuildStepCustom