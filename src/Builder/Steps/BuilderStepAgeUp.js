import BuilderInfoService from '../BuilderInfoService'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import BuilderDropdownMedium from '../UI/BuilderDropdownMedium'

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
        <div class='flex space-x-1 align-top justify-start'>
            <BuilderText>Research</BuilderText>
            <BuilderDropdownMedium value={props.step.age} options={BuilderInfoService.getAgeOptions()} onChange={handleClickOnAge} />
        </div>
    )
}

export default BuilderStepAgeUp