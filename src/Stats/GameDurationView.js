const GameDurationsView = (props) => {
    return (
        <div>
            <div class='flex space-x-8 w-1/2 justify-center m-auto'>
                {Object.keys(props.data).map((key, index) => (
                    <div class='flex flex-col bg-slate-50 rounded-xl p-6 grow'>
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