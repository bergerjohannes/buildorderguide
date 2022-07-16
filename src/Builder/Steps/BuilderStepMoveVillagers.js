import BuilderInfoService from '../BuilderInfoService'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import BuilderDropdownSmall from '../UI/BuilderDropdownSmall'
import BuilderDropdownMedium from '../UI/BuilderDropdownMedium'

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
            <BuilderDropdownSmall value={props.step.count} options={BuilderInfoService.getNumericOptions()} onChange={handleClickOnCount} />
            <BuilderDropdownMedium value={props.step.from} options={BuilderInfoService.getTaskOptions()} onChange={handleClickOnTaskFrom} />
            <BuilderText>→</BuilderText>
            <BuilderDropdownMedium value={props.step.to} options={BuilderInfoService.getTaskOptions()} onChange={handleClickOnTaskTo} />
        </div>
    )
}

export default BuilderStepMoveVillagers