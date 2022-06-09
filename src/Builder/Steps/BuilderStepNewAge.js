import BuilderInfoService from '../BuilderInfoService'
import BuilderSelect from '../UI/BuilderSelect'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'

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
            <BuilderSelect selected={props.step.age} options={BuilderInfoService.getAgeOptions()} onChange={handleClickOnAge} />
        </div>
    )
}

export default BuildStepNewAge