import BuilderInfoService from '../BuilderInfoService'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import Dropdown from '../../UI/Dropdown'

const BuilderStepAgeUp = (props) => {

    const handleClickOnAge = (event) => {
        update(event.value)
    }

    const update = (age) => {
        props.update(props.index, {
            type: Constants.StepType.AgeUp,
            age: age
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderText>Research</BuilderText>
            <Dropdown value={props.step.age} options={BuilderInfoService.getAgeOptions()} onChange={handleClickOnAge} />
        </div>
    )
}

export default BuilderStepAgeUp