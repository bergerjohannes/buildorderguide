const GameDurationsView = (props) => {
    return (
        <div>
            <div class='flex w-full md:w-1/2 justify-center m-auto text-main-dark flex-wrap text-center'>
                {Object.keys(props.data).map((key, index) => (
                    <div class='flex flex-col bg-secondary-light rounded-xl p-2 my-2 mx-2 md:p-6 w-5/12 md:w-auto md:grow'>
                        <span>{key} min</span>
                        <span>{props.data[key].percentage}</span>
                        <span>({props.data[key].won}/{props.data[key].games})</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameDurationsView