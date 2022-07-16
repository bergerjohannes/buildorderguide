import AddBuildStepOptionsView from './AddBuildStepOptionsView'
import { useState } from 'react'
import BuilderStepView from './BuilderStepView'
import * as Constants from '../Constants'
import CenteredButton from '../UI/CenteredButton'
import Droppable from '../UI/Droppable'

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

    const handleDragEnd = ({ active, over }) => {
        if (!over) return
        if (active.id === over.id) return

        props.reorderSteps(active.data.current.sortable.index, over.data.current.sortable.index)
    }

    const steps = []
    props.build.map((step, index) => (
        steps.push(<BuilderStepView step={step} index={index} updateStep={props.updateStep} removeStep={props.removeStep} />)
    ))

    return (
        <div class='flex flex-col justify-center w-11/12 xl:w-1/2 mx-auto my-20 space-y-4 text-xs xl:text-base'>

            <Droppable items={steps} key={'DnD'} handleDragEnd={handleDragEnd} />

            {addingStep === true && <AddBuildStepOptionsView addStep={props.addStep} close={closeMenu} latestAgeResearched={latestAgeResearched} />}
            {addingStep === false && <CenteredButton onClick={openMenu}>Add step</CenteredButton>}
        </div >
    )
}

export default BuilderBuildCreationView