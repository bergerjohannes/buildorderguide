const ChallengeTable = (props) => {
    return (
        <div class='text-main-dark'>
            {props.data.players.length > 0 &&
                <div class='w-full md:w-1/2 grid grid-cols-9 grid-rows-1 m-auto'>
                    <p class='col-span-3'><strong>Player</strong></p>
                    <p class='col-span-2'><strong>Games</strong></p>
                    <p class='col-span-1'><strong>Won</strong></p>
                    <p class='col-span-1'><strong>Lost</strong></p>
                    <p class='col-span-2'><strong>Points</strong></p>
                </div>}
            {props.data.players.sort((a, b) => b.points - a.points).map((player, index) => (
                <div class='w-full md:w-1/2 grid grid-cols-9 grid-rows-1 m-auto'>
                    <p class='col-span-3'>{player.name}</p>
                    <p class='col-span-2'>{player.games} / 37</p>
                    <p class='col-span-1'>{player.won}</p>
                    <p class='col-span-1'>{player.lost}</p>
                    <p class='col-span-2'>{player.won} / 37</p>
                </div>
            ))}
        </div>
    )

}

export default ChallengeTable