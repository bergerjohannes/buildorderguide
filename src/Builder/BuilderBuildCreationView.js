import AddBuildStepOptionsView from './AddBuildStepOptionsView'
import { useState } from 'react'
import BuilderStepView from './BuilderStepView'
import * as Constants from '../Constants'
import CenteredButton from '../UI/CenteredButton'

const BuilderBuildCreationView = (props) => {
    const [addingStep, setAddingStep] = useState(false)

    const ageUpSteps = props.build.filter(step => step.type === Constants.StepType.AgeUp)
    const latestAgeResearched = ageUpSteps.length === 0 ? Constants.Age.DarkAge : ageUpSteps.pop().age

    const openMenu = () => {
        setAddingStep(true)
    }

    const closeMenu = () => {
        setAddingStep(false)
    }

    return (
        <div class='flex flex-col justify-center w-1/2 mx-auto my-20 space-y-4'>
            {props.build.map((step, index) => (
                <BuilderStepView step={step} index={index} updateStep={props.updateStep} removeStep={props.removeStep} />
            ))}

            {addingStep === true && <AddBuildStepOptionsView addStep={props.addStep} close={closeMenu} latestAgeResearched={latestAgeResearched} />}
            {addingStep === false && <CenteredButton onClick={openMenu}>Add step</CenteredButton>}
        </div >
    )
}

export default BuilderBuildCreationView