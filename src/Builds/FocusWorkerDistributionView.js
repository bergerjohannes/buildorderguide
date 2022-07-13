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
        <div class='m-auto grid space-y-2 grid-cols-4 grid-rows-2 text-main-dark text-3xl bg-secondary-light py-4'>
            <div class='w-full md:w-5/12 lg:w-4/12 col-span-4 flex justify-around m-auto'>
                <img class='w-8 h-8 md:w-12 md:h-12' src={require('../Images/Resources/Aoe2de_wood.png')} alt='Wood' />
                <img class='w-8 h-8 md:w-12 md:h-12' src={require('../Images/Resources/Aoe2de_food.png')} alt='Food' />
                {showGold && <img class='w-8 h-8 md:w-12 md:h-12' src={require('../Images/Resources/Aoe2de_gold.png')} alt='Gold' />}
                {showStone && <img class='w-8 h-8 md:w-12 md:h-12' src={require('../Images/Resources/Aoe2de_stone.png')} alt='Stone' />}
                {showBuilder && <img class='w-8 h-8 md:w-12 md:h-12' src={require('../Images/Resources/Aoe2de_builder.png')} alt='Builder' />}
            </div>
            <div class='w-full md:w-5/12 lg:w-4/12 col-span-4 flex justify-around m-auto'>
                <p class='w-8 h-8 md:w-12 md:h-12 text-center'>{wood}</p>
                <p class='w-8 h-8 md:w-12 md:h-12 text-center'>{food}</p>
                {showGold && <p class='w-8 h-8 md:w-12 md:h-12 text-center'>{gold}</p>}
                {showStone && <p class='w-8 h-8 md:w-12 md:h-12 text-center'>{stone}</p>}
                {showBuilder && <p class='w-8 h-8 md:w-12 md:h-12 text-center'>{builder}</p>}
            </div>
        </div>
    )
}

export default FocusWorkerDistributionView