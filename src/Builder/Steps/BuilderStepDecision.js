import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'

const BuilderStepDecision = (props) => {

    const handleTextChange = (event) => {
        update(event.target.value)
    }

    const update = (text) => {
        props.update(props.index, {
            type: Constants.StepType.Decision,
            text: text
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderText>DECISION OPTION:</BuilderText>
            <input class='border p-2 rounded-md' type='text' value={props.step.text} onChange={handleTextChange} />
        </div>
    )
}

export default BuilderStepDecision