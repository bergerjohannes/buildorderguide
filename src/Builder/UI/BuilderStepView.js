import RemoveStepView from './RemoveStepView'
import * as Constants from '../../Constants'
import BuilderStepNewVillagers from './Steps/BuilderStepNewVillagers'
import BuilderStepTrainUnit from './Steps/BuilderStepTrainUnit'
import BuilderStepResearch from './Steps/BuilderStepResearch'
import BuilderStepAgeUp from './Steps/BuilderStepAgeUp'
import BuilderStepDecision from './Steps/BuilderStepDecision'
import BuilderStepBuild from './Steps/BuilderStepBuild'
import BuilderStepNewAge from './Steps/BuilderStepNewAge'
import BuilderStepCollectGold from './Steps/BuilderStepCollectGold'
import BuilderStepMoveVillagers from './Steps/BuilderStepMoveVillagers'
import BuilderStepLureAnimals from './Steps/BuilderStepLureAnimals'
import BuilderStepTrade from './Steps/BuilderStepTrade'
import BuilderStepCustom from './Steps/BuilderStepCustom'

const BuilderStepView = (props) => {

    return (
        <div class='flex'>
            {props.step.type === Constants.StepType.NewVillagers && <BuilderStepNewVillagers step={props.step} />}
            {props.step.type === Constants.StepType.TrainUnit && <BuilderStepTrainUnit step={props.step} />}
            {props.step.type === Constants.StepType.Research && <BuilderStepResearch step={props.step} />}
            {props.step.type === Constants.StepType.AgeUp && <BuilderStepAgeUp step={props.step} />}
            {props.step.type === Constants.StepType.Decision && <BuilderStepDecision step={props.step} />}
            {props.step.type === Constants.StepType.Build && <BuilderStepBuild step={props.step} />}
            {props.step.type === Constants.StepType.NewAge && <BuilderStepNewAge step={props.step} />}
            {props.step.type === Constants.StepType.CollectGold && <BuilderStepCollectGold step={props.step} />}
            {props.step.type === Constants.StepType.MoveVillagers && <BuilderStepMoveVillagers step={props.step} />}
            {(props.step.type === Constants.StepType.Lure || props.step.type === Constants.StepType.Boar) && <BuilderStepLureAnimals step={props.step} />}
            {props.step.type === Constants.StepType.Trade && <BuilderStepTrade step={props.step} />}
            {props.step.type === Constants.StepType.Custom && <BuilderStepCustom step={props.step} />}

            <RemoveStepView remove={() => console.log('Remove me!')} />
        </div>
    )
}

export default BuilderStepView