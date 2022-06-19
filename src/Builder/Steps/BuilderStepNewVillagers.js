import BuilderInfoService from '../BuilderInfoService'
import BuilderText from '../UI/BuilderText'
import BuilderStepBuild from './BuilderStepBuild'
import * as Constants from '../../Constants'
import Dropdown from '../../UI/Dropdown'

const BuilderStepNewVillagers = (props) => {

    const handleClickOnTask = (event) => {
        update(event.value, props.step.count, props.step.buildings)
    }

    const handleClickOnCount = (event) => {
        update(props.step.task, event.value, props.step.buildings)
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
            {props.step.buildings !== undefined && <><BuilderStepBuild step={props.step} update={props.update} /><BuilderText>&</BuilderText></>}
            <Dropdown value={props.step.count} options={BuilderInfoService.getNumericOptions()} onChange={handleClickOnCount} />
            <BuilderText>on</BuilderText>
            <Dropdown value={props.step.task} options={BuilderInfoService.getTaskOptions()} onChange={handleClickOnTask} />
        </div>
    )
}

export default BuilderStepNewVillagers