import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import Input from '../../UI/Input'
import { debounce } from 'lodash'

const BuilderStepDecision = (props) => {

    const handleTextChange = debounce(value => {
        update(value)
    }, 250)

    const update = (text) => {
        props.update(props.index, {
            type: Constants.StepType.Decision,
            text: text
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderText>DECISION:</BuilderText>
            <div class='lg:min-w-lg'><Input value={props.step.text} onChange={event => { handleTextChange(event.target.value) }} /></div>
        </div>
    )
}

export default BuilderStepDecision