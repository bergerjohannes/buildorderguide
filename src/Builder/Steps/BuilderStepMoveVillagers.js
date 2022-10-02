import BuilderInfoService from '../BuilderInfoService'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import BuilderDropdownSmall from '../UI/BuilderDropdownSmall'
import BuilderDropdownMedium from '../UI/BuilderDropdownMedium'
import AddOptionButton from '../UI/AddOptionButton'
import BuilderStepBuild from './BuilderStepBuild'

const BuilderStepMoveVillagers = (props) => {

    const handleClickOnCount = (event) => {
        update(event.value, props.step.from, props.step.to, props.step.buildings)
    }

    const handleClickOnTaskFrom = (event) => {
        update(props.step.count, event.value, props.step.to, props.step.buildings)
    }

    const handleClickOnTaskTo = (event) => {
        update(props.step.count, props.step.from, event.value, props.step.buildings)
    }

    const update = (count, taskFrom, taskTo, buildings) => {
        console.log("Updates: " + JSON.stringify({
            type: Constants.StepType.MoveVillagers,
            count: count,
            from: taskFrom,
            to: taskTo,
            buildings: buildings
        }))
        props.update(props.index, {
            type: Constants.StepType.MoveVillagers,
            count: count,
            from: taskFrom,
            to: taskTo,
            buildings: buildings
        })
    }

    const addBuilding = (event) => {
        let buildings = props.step.buildings !== undefined ? props.step.buildings : []
        let type = buildings.length === 0 ? Constants.Building.Blacksmith : Constants.Building.Market
        let count = 1
        buildings.push({
            type: type,
            count: count
        })
        update(props.step.count, props.step.from, props.step.to, buildings)
    }

    return (
        <div class='flex space-x-1'>
            <BuilderDropdownSmall value={props.step.count} options={BuilderInfoService.getNumericOptions()} onChange={handleClickOnCount} />
            <BuilderDropdownMedium value={props.step.from} options={BuilderInfoService.getTaskOptions()} onChange={handleClickOnTaskFrom} />
            <BuilderText>→</BuilderText>
            <BuilderDropdownMedium value={props.step.to} options={BuilderInfoService.getTaskOptions()} onChange={handleClickOnTaskTo} />
            {(props.step.buildings !== undefined && props.step.buildings.length > 0) && <><BuilderText>&</BuilderText><BuilderStepBuild step={props.step} update={props.update} /></>}
            {(props.step.buildings === undefined || props.step.buildings.length < 1) && <AddOptionButton onClick={addBuilding} />}
        </div>
    )
}

export default BuilderStepMoveVillagers