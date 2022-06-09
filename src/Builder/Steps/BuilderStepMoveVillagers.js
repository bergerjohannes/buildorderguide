import BuilderInfoService from '../BuilderInfoService'
import BuilderSelect from '../UI/BuilderSelect'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'

const BuilderStepMoveVillagers = (props) => {

    const handleClickOnCount = (event) => {
        update(event.value, props.step.from, props.step.to)
    }

    const handleClickOnTaskFrom = (event) => {
        update(props.step.count, event.value, props.step.to)
    }

    const handleClickOnTaskTo = (event) => {
        update(props.step.count, props.step.from, event.value)
    }

    const update = (count, taskFrom, taskTo) => {
        props.update(props.index, {
            type: Constants.StepType.MoveVillagers,
            count: count,
            from: taskFrom,
            to: taskTo
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderSelect selected={props.step.count} options={BuilderInfoService.getNumericOptions()} onChange={handleClickOnCount} />
            <BuilderSelect selected={props.step.from} options={BuilderInfoService.getTaskOptions()} onChange={handleClickOnTaskFrom} />
            <BuilderText>→</BuilderText>
            <BuilderSelect selected={props.step.to} options={BuilderInfoService.getTaskOptions()} onChange={handleClickOnTaskTo} />
        </div>
    )
}

export default BuilderStepMoveVillagers