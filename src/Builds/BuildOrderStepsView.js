import BuildData from './BuildData'
import WorkerDistributionView from './WorkerDistributionView'
import WorkerDistributionHeaderView from './WorkerDistributionHeaderView'
import * as Constants from '../Constants'

const BuildOrderStepsView = (props) => {

    var currentGroup = null
    const showBuilder = BuildData.showBuilderInBuild(props.build)
    const showGold = BuildData.showGoldInBuild(props.build)
    const showStone = BuildData.showStoneInBuild(props.build)

    if (props.build === undefined) return (<></>)

    const renderHeader = (step, index, showGold, showStone, showBuilder) => {
        currentGroup = null

        return (
            <>
                <h2 class='text-3xl text-center mt-8 mb-2'>{step.text}</h2>
                <div class='flex justify-end'>
                    {index + 1 < props.build.length && <WorkerDistributionHeaderView showGold={showGold} showStone={showStone} showBuilder={showBuilder} />}
                </div>
                <hr class='my-4' />
            </>
        )
    }

    const renderStep = (step, index, showGold, showStone, showBuilder) => {
        if (step.type === Constants.StepType.NewAge) currentGroup = null

        let title = BuildData.getTitleForStep(step)
        const age = step.age === undefined ? null : BuildData.getAgeText(step.age)

        if (currentGroup !== null) title = '• ' + title
        if (step.type === Constants.StepType.AgeUp && index + 1 < props.build.length) currentGroup = age


        return (
            <div>
                {step.type !== Constants.StepType.NewAge && <div class='grid overflow-hidden grid-cols-12 grid-rows-1'>
                    <div class='box row-start-1 row-end-auto col-span-9 md:col-span-8'>{title}</div>
                    {(step.type === Constants.StepType.NewVillagers || step.type === Constants.StepType.MoveVillagers || step.type === Constants.StepType.CollectGold) && <div class='box col-span-3 md:col-span-4'><WorkerDistributionView food={step.resources.food} builder={step.resources.build} wood={step.resources.wood} stone={step.resources.stone} showGold={showGold} showStone={showStone} showBuilder={showBuilder} gold={step.resources.gold} /></div>}
                </div>}
                {step.type === Constants.StepType.NewAge && <><hr class='my-4' /><div class='flex my-4 text-xl'><img class='w-6 h-6' src={require('../Images/Ages/' + step.age + '.png')} alt={'Feudal Age'} />{age}</div></>}
                {(step.type === Constants.StepType.AgeUp && index + 1 < props.build.length && props.build[index + 1].type !== Constants.StepType.NewAge && props.build[index + 1].type !== Constants.StepType.Decision) && <><hr class='my-4' /><div class='italic my-4 text-xl'>Before {age}</div></>}
            </div>
        )
    }

    return (
        <div class='flex flex-col w-11/12 md:max-w-2xl m-auto text-main-dark pb-16 text-xs md:text-base'>
            <div class='flex justify-end'><WorkerDistributionHeaderView showGold={showGold} showStone={showStone} showBuilder={showBuilder} /></div>
            <hr class='my-4' />
            {props.build.map((step, index) => (
                <div>
                    {step.type === Constants.StepType.Decision && renderHeader(step, index, showGold, showStone, showBuilder)}
                    {step.type !== Constants.StepType.Decision && renderStep(step, index, showGold, showStone, showBuilder)}
                </div>
            ))}
        </div>
    )
}

export default BuildOrderStepsView