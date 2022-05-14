const WorkerDistributionHeaderView = (props) => {

    return (
        <div class='flex space-x-5'>
            <img class='w-6 h-6' src={require('../Images/Resources/Aoe2de_wood.png')} alt='Wood' />
            <img class='w-6 h-6' src={require('../Images/Resources/Aoe2de_food.png')} alt='Food' />
            {props.showGold && <img class='w-6 h-6' src={require('../Images/Resources/Aoe2de_gold.png')} alt='Gold' />}
            {props.showStone &&  <img class='w-6 h-6' src={require('../Images/Resources/Aoe2de_stone.png')} alt='Stone' />}
            {props.showBuilder && <img class='w-6 h-6' src={require('../Images/Resources/Aoe2de_builder.png')} alt='Builder' />}
        </div>
    )
}

export default WorkerDistributionHeaderView