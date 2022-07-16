import BuilderInfoService from '../BuilderInfoService'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import BuilderDropdownSmall from '../UI/BuilderDropdownSmall'
import BuilderDropdownMedium from '../UI/BuilderDropdownMedium'

const BuilderStepTrainUnit = (props) => {

    const handleClickOnUnit = (event) => {
        update(event.value, props.step.count)
    }

    const handleClickOnCount = (event) => {
        update(props.step.unit, event.value)
    }

    const update = (unit, count) => {
        props.update(props.index, {
            type: Constants.StepType.TrainUnit,
            unit: unit,
            count: count
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderText>Train</BuilderText>
            <BuilderDropdownSmall value={props.step.count} options={BuilderInfoService.getNumericOptionsIncludingUnlimited()} onChange={handleClickOnCount} />
            <BuilderDropdownMedium value={props.step.unit} options={BuilderInfoService.getTrainUnitOptions()} onChange={handleClickOnUnit} />
        </div>
    )
}

export default BuilderStepTrainUnit