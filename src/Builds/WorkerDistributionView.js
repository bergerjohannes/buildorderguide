const WorkerDistributionView = (props) => {

    return (
        <div class='flex space-x-5'>
            <p class='w-6 h-6 text-center'>{props.wood > 0 && props.wood}</p>
            <p class='w-6 h-6 text-center'>{props.food > 0 && props.food}</p>
            {props.showGold && <p class='w-6 h-6 text-center'>{props.gold > 0 && props.gold}</p>}
            {props.showStone && <p class='w-6 h-6 text-center'>{props.stone > 0 && props.stone}</p>}
            {props.showBuilder && <p class='w-6 h-6 text-center'>{props.builder > 0 && props.builder}</p>}
        </div>
    )
}

export default WorkerDistributionView