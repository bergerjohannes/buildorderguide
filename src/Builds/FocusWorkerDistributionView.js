import BuildData from './BuildData'

const FocusWorkerDistributionView = (props) => {

    const showBuilder = BuildData.showBuilderInBuild(props.build)
    const showGold = BuildData.showGoldInBuild(props.build)
    const showStone = BuildData.showStoneInBuild(props.build)

    const food = props.build[props.step].resources.food
    const wood = props.build[props.step].resources.wood
    const stone = props.build[props.step].resources.stone
    const gold = props.build[props.step].resources.gold
    const builder = props.build[props.step].resources.build

    return (
        <div class='w-full m-auto grid grid-cols-4 grid-rows-2 overflow-visible text-main-dark'>
            <div class='col-span-4 flex justify-around w-full'>
                <img class='w-4 h-4 md:w-6 md:h-6' src={require('../Images/Resources/Aoe2de_wood.png')} alt='Wood' />
                <img class='w-4 h-4 md:w-6 md:h-6' src={require('../Images/Resources/Aoe2de_food.png')} alt='Food' />
                {showGold && <img class='w-4 h-4 md:w-6 md:h-6' src={require('../Images/Resources/Aoe2de_gold.png')} alt='Gold' />}
                {showStone && <img class='w-4 h-4 md:w-6 md:h-6' src={require('../Images/Resources/Aoe2de_stone.png')} alt='Stone' />}
                {showBuilder && <img class='w-4 h-4 md:w-6 md:h-6' src={require('../Images/Resources/Aoe2de_builder.png')} alt='Builder' />}
            </div>
            <div class='col-span-4 flex justify-around w-full'>
                <p class='w-4 h-4 md:w-6 md:h-6 text-center'>{wood}</p>
                <p class='w-4 h-4 md:w-6 md:h-6 text-center'>{food}</p>
                {showGold && <p class='w-4 h-4 md:w-6 md:h-6 text-center'>{gold}</p>}
                {showStone && <p class='w-4 h-4 md:w-6 md:h-6 text-center'>{stone}</p>}
                {showBuilder && <p class='w-4 h-4 md:w-6 md:h-6 text-center'>{builder}</p>}
            </div>
        </div>
    )
}

export default FocusWorkerDistributionView