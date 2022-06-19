import BuilderInfoService from '../BuilderInfoService'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import Dropdown from '../../UI/Dropdown'

const BuildStepNewAge = (props) => {

    const handleClickOnAge = (event) => {
        update(event.value)
    }

    const update = (age) => {
        props.update(props.index, {
            type: Constants.StepType.NewAge,
            age: age
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderText>New Age Reached: </BuilderText>
            <Dropdown value={props.step.age} options={BuilderInfoService.getAgeOptions()} onChange={handleClickOnAge} />
        </div>
    )
}

export default BuildStepNewAge