import BuilderInfoService from '../BuilderInfoService'
import BuilderText from '../UI/BuilderText'
import BuilderStepBuild from './BuilderStepBuild'
import * as Constants from '../../Constants'
import BuilderDropdownMedium from '../UI/BuilderDropdownMedium'
import BuilderDropdownSmall from '../UI/BuilderDropdownSmall'
import AddOptionButton from '../UI/AddOptionButton'

const BuilderStepNewVillagers = (props) => {

    const handleClickOnTask = (event) => {
        update(event.value, props.step.count, props.step.buildings)
    }

    const handleClickOnCount = (event) => {
        update(props.step.task, event.value, props.step.buildings)
    }

    const addBuilding = (event) => {
        let buildings = props.step.buildings !== undefined ? props.step.buildings : []
        let type = buildings.length === 0 ? Constants.Building.Blacksmith : Constants.Building.Market
        let count = 1
        buildings.push({
            type: type,
            count: count
        })
        update(props.step.task, props.step.count, buildings)
    }

    const update = (task, count, buildings) => {
        props.update(props.index, {
            type: Constants.StepType.NewVillagers,
            task: task,
            count: count,
            buildings: buildings
        })
    }

    return (
        <div class='flex space-x-1'>
            {(props.step.buildings !== undefined && props.step.buildings.length > 0) && <><BuilderStepBuild step={props.step} update={props.update} /><BuilderText>&</BuilderText></>}
            <BuilderDropdownSmall value={props.step.count} options={BuilderInfoService.getNumericOptions()} onChange={handleClickOnCount} />
            <BuilderText>on</BuilderText>
            <BuilderDropdownMedium value={props.step.task} options={BuilderInfoService.getTaskOptions()} onChange={handleClickOnTask} />
            {(props.step.buildings === undefined || props.step.buildings.length < 1) && <AddOptionButton onClick={addBuilding} />}
        </div>
    )
}

export default BuilderStepNewVillagers