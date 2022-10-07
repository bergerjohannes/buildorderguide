import * as Constants from '../Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import Heading2 from '../UI/Heading2'

const AddBuildStepOptionsView = (props) => {

    const addNewStep = (event) => {
        addStep({
            type: Constants.StepType.NewVillagers,
            task: Constants.Task.Sheep,
            count: 6
        })
    }

    const addMoveStep = (event) => {
        addStep({
            type: Constants.StepType.MoveVillagers,
            from: Constants.Task.Sheep,
            to: Constants.Task.Gold,
            count: 3
        })
    }

    const addResearchStep = (event) => {
        addStep({
            type: Constants.StepType.Research,
            tech: [Constants.Tech.DoubleBitAxe, Constants.Tech.HorseCollar]
        })
    }

    const addBuildingStep = (event) => {
        addStep({
            type: Constants.StepType.Build,
            buildings: [{
                type: Constants.Building.Barracks,
                count: 1
            }]
        })
    }

    const addAgeUpStep = (event) => {
        const age = props.latestAgeResearched === Constants.Age.FeudalAge ? Constants.Age.CastleAge : props.latestAgeResearched === Constants.Age.CastleAge ? Constants.Age.ImperialAge : Constants.Age.FeudalAge

        addStep({
            type: Constants.StepType.AgeUp,
            age: age
        })
    }

    const addNewAgeStep = (event) => {
        const age = props.latestAgeResearched === Constants.Age.FeudalAge ? Constants.Age.FeudalAge : props.latestAgeResearched === Constants.Age.CastleAge ? Constants.Age.CastleAge : Constants.Age.ImperialAge
        addStep({
            type: Constants.StepType.NewAge,
            age: age
        })
    }

    const addLureAnimalStep = (event) => {
        addStep({
            type: Constants.StepType.Lure,
            count: 1,
            animal: Constants.Task.Boar
        })
    }

    const addTrainUnitStep = (event) => {
        addStep({
            type: Constants.StepType.TrainUnit,
            unit: Constants.Unit.Militia,
            count: 3
        })
    }

    const addTradeStep = (event) => {
        addStep({
            type: Constants.StepType.Trade,
            action: Constants.Action.Sell,
            count: 100,
            resource: Constants.Task.Wood
        })
    }

    const addCollectGoldStep = (event) => {
        addStep({
            type: Constants.StepType.CollectGold,
            subType: Constants.StepType.NewVillagers,
            task: Constants.Task.Collect10GoldAfterBarracksIsBuilt,
            count: 1
        })
    }

    const addDecisionStep = (event) => {
        addStep({
            type: Constants.StepType.Decision,
            text: 'Scouts → Archers'
        })
    }

    const addCustomStep = (event) => {
        addStep({
            type: Constants.StepType.Custom,
            text: 'Delete your TC'
        })
    }

    const addStep = (step) => {
        props.addStep(step)
    }

    const options = [
        <button onClick={addNewStep}>New</button>,
        <button onClick={addMoveStep}>Move</button>,
        <button onClick={addResearchStep}>Research</button>,
        <button onClick={addBuildingStep}>Building</button>,
        <button onClick={addAgeUpStep}>Age Up</button>,
        <button onClick={addNewAgeStep}>New Age</button>,
        <button onClick={addLureAnimalStep}>Lure</button>,
        <button onClick={addTrainUnitStep}>Train Unit</button>,
        <button onClick={addTradeStep}>Trade</button>,
        <button onClick={addCollectGoldStep}>Collect Gold</button>,
        <button onClick={addDecisionStep}>Decision</button>,
        <button onClick={addCustomStep}>Custom</button>
    ]
    return (
        <div class=''>
            <Heading2>Add a new step</Heading2>
            <div class='flex flex-wrap'>
                {options.map(option => (
                    <div class='bg-accent-dark text-main-dark p-2 m-2 rounded-md'>{option}</div>
                ))}
            </div>

            <button class='text-red-500' onClick={props.close}>
                <FontAwesomeIcon icon={faCircleMinus} />
            </button>
        </div>
    )
}

export default AddBuildStepOptionsView