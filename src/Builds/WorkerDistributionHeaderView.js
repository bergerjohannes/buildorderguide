const WorkerDistributionHeaderView = (props) => {

    return (
        <div class='w-full grid overflow-hidden grid-cols-12 grid-rows-1'>
            <div class='col-start-10 md:col-start-9 col-span-3 md:col-span-4 flex justify-around w-full'>
                <img class='w-4 h-4 md:w-6 md:h-6' src={require('../Images/Resources/Aoe2de_wood.png')} alt='Wood' />
                <img class='w-4 h-4 md:w-6 md:h-6' src={require('../Images/Resources/Aoe2de_food.png')} alt='Food' />
                {props.showGold && <img class='w-4 h-4 md:w-6 md:h-6' src={require('../Images/Resources/Aoe2de_gold.png')} alt='Gold' />}
                {props.showStone && <img class='w-4 h-4 md:w-6 md:h-6' src={require('../Images/Resources/Aoe2de_stone.png')} alt='Stone' />}
                {props.showBuilder && <img class='w-4 h-4 md:w-6 md:h-6' src={require('../Images/Resources/Aoe2de_builder.png')} alt='Builder' />}
            </div>
        </div>
    )
}

export default WorkerDistributionHeaderView

