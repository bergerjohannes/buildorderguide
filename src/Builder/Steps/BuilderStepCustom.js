import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import Input from '../../UI/Input'
import { debounce } from 'lodash'

const BuildStepCustom = (props) => {

    const handleTextChange = debounce(value => {
        update(value)
    }, 250)

    const update = (text) => {
        props.update(props.index, {
            type: Constants.StepType.Custom,
            text: text
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderText>Custom:</BuilderText>
            <div class='lg:min-w-lg'><Input defaultValue={props.step.text} onChange={event => { handleTextChange(event.target.value) }} /></div>
        </div>
    )
}

export default BuildStepCustom