import AddOptionButton from '../UI/AddOptionButton'
import BuilderInfoService from '../BuilderInfoService'
import RemoveOptionButton from '../UI/RemoveOptionButton'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import BuilderDropdownSmall from '../UI/BuilderDropdownSmall'
import BuilderDropdownMedium from '../UI/BuilderDropdownMedium'

const BuilderStepBuild = (props) => {

    const handleClickOnCountWithIndex = (event, index) => {
        updateCount(index, event.value)
    }

    const updateCount = (index, count) => {
        let buildings = props.step.buildings
        buildings[index] = {
            type: buildings[index].type,
            count: count
        }
        update(buildings)
    }

    const handleClickOnBuildingWithIndex = (event, index) => {
        updateBuilding(index, event.value)
    }

    const updateBuilding = (index, building) => {
        let buildings = props.step.buildings
        buildings[index].type = building
        update(buildings)
    }

    const addBuilding = (event) => {
        let buildings = props.step.buildings !== undefined ? props.step.buildings : []
        let type = buildings.length === 0 ? Constants.Building.Blacksmith : Constants.Building.Market
        let count = 1
        buildings.push({
            type: type,
            count: count
        })
        update(buildings)
    }

    const removeBuildingWithIndex = (index) => {
        let buildings = props.step.buildings
        buildings.splice(index, 1)
        update(buildings)
    }


    const update = (buildings) => {
        props.update(props.index, {
            type: props.step.type,
            buildings: buildings
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderText>Build</BuilderText>
            {props.step.buildings.map((item, index) => (
                <>
                    <BuilderDropdownSmall value={props.step.buildings[index].count} options={BuilderInfoService.getNumericOptions()} onChange={(event) => handleClickOnCountWithIndex(event, index)} />
                    <BuilderDropdownMedium value={props.step.buildings[index].type} options={BuilderInfoService.getBuildingsOptions()} onChange={(event) => handleClickOnBuildingWithIndex(event, index)} />
                    {(index > 0 || props.step.type === Constants.StepType.NewVillagers || props.step.type === Constants.StepType.MoveVillagers) && <RemoveOptionButton onClick={() => removeBuildingWithIndex(index)} />}
                    {props.step.buildings.length - 1 > index && <BuilderText>&</BuilderText>}
                </>
            ))}
            {((props.step.buildings.length < 3 && props.step.type === Constants.StepType.Build) || (props.step.buildings.length < 2 && props.step.type === Constants.StepType.NewVillagers)) && <AddOptionButton onClick={() => addBuilding()} />}
        </div>
    )
}

export default BuilderStepBuild