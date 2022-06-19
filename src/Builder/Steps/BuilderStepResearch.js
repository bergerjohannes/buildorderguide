import AddOptionButton from '../UI/AddOptionButton'
import BuilderInfoService from '../BuilderInfoService'
import RemoveOptionButton from '../UI/RemoveOptionButton'
import BuilderText from '../UI/BuilderText'
import * as Constants from '../../Constants'
import Dropdown from '../../UI/Dropdown'

const BuilderStepResearch = (props) => {

    const handleClickOnTechWithIndex = (event, index) => {
        updateTech(index, event.value)
    }

    const updateTech = (index, tech) => {
        let techs = props.step.tech
        techs[index] = tech
        update(techs)
    }

    const addTech = (event) => {
        let techs = props.step.tech !== undefined ? [...props.step.tech] : []

        if (techs.length < 3) {
            let type = techs.length === 0 ? Constants.Tech.DoubleBitAxe : techs.length === 1 ? Constants.Tech.HorseCollar : Constants.Tech.Fletching
            techs.push(type)
        } else {
            console.log('Error: only three techs per step allowed')
        }

        update(techs)
    }

    const removeTechWithIndex = (index) => {
        let techs = props.step.tech
        techs.splice(index, 1)
        update(techs)
    }

    const update = (techs) => {
        props.update(props.index, {
            type: Constants.StepType.Research,
            tech: techs
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderText>Research</BuilderText>
            {props.step.tech.map((item, index) => (
                <>
                    <Dropdown value={props.step.tech[index]} options={BuilderInfoService.getTechOptions()} onChange={(event) => handleClickOnTechWithIndex(event, index)} />
                    {index > 0 && <RemoveOptionButton onClick={() => removeTechWithIndex(index)} />}
                    {props.step.tech.length - 1 > index && <BuilderText>&</BuilderText>}
                </>
            ))}
            {props.step.tech.length < 3 && <AddOptionButton onClick={() => addTech()} />}
        </div>
    )
}

export default BuilderStepResearch