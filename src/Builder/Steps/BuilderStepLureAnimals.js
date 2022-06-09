import BuilderInfoService from '../BuilderInfoService'
import BuilderSelect from '../UI/BuilderSelect'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'

const BuildStepLureAnmials = (props) => {

    const handleClickOnCount = (event) => {
        update(event.value, props.step.animal)
    }

    const handleClickOnAnimal = (event) => {
        update(props.step.count, event.value)
    }

    const update = (count, animal) => {
        if (animal == Constants.Task.Boar) count = 1
        props.update(props.index, {
            type: Constants.StepType.Lure,
            count: count,
            animal: animal
        })
    }

    return (
        <div class='flex space-x-1'>
            {props.step.animal !== 'boar' && <BuilderText>Push</BuilderText>}
            {props.step.animal === 'boar' && <BuilderText>Lure</BuilderText>}
            {props.step.animal !== 'boar' && <BuilderSelect selected={props.step.count} options={BuilderInfoService.getNumericOptions()} onChange={handleClickOnCount} />}
            <BuilderSelect selected={props.step.animal} options={BuilderInfoService.getAnimalOptions()} onChange={handleClickOnAnimal} />
            {props.step.animal !== 'boar' && <BuilderText>With Scout</BuilderText>}
            {props.step.animal === 'boar' && <BuilderText>With Villager Under TC</BuilderText>}
        </div>
    )
}

export default BuildStepLureAnmials