
import BuilderInfoService from '../BuilderInfoService'
import BuilderSelect from '../UI/BuilderSelect'
import * as Constants from '../../Constants'

const BuildStepCollectGold = (props) => {

    const handleClickOnTask = (event) => {
        let task = event.value
        let subType = (task === Constants.Task.Collect10GoldAfterBarracksIsBuilt) ? Constants.StepType.MoveVillagers : Constants.StepType.NewVillagers
        let count = (task === Constants.Task.Collect40GoldWithTwoNewVillagers) ? 2 : 1

        if (subType === Constants.StepType.NewVillagers) {
            update({
                type: Constants.StepType.CollectGold,
                subType: Constants.StepType.NewVillagers,
                task: task,
                count: count
            })
        } else {
            update({
                type: Constants.StepType.CollectGold,
                subType: Constants.StepType.MoveVillagers,
                from: Constants.Task.Build,
                to: Constants.Task.Gold,
                task: task,
                count: count
            })
        }
    }

    const update = (task) => {
        props.update(props.index, task)
    }

    return (
        <div class='flex space-x-1'>
            <BuilderSelect selected={props.step.task} options={BuilderInfoService.getGoldCollectionOptions()} onChange={(event) => handleClickOnTask(event)} />
        </div>
    )
}

export default BuildStepCollectGold