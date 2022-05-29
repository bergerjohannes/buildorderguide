const ChallengeTable = (props) => {
    return (
        <div>
            {props.data.players.length > 0 &&
                <div class='flex w-1/2 m-auto'>
                    <p class='w-2/6'><strong>Player</strong></p>
                    <p class='w-1/6'><strong>Games</strong></p>
                    <p class='w-1/6'><strong>Won</strong></p>
                    <p class='w-1/6'><strong>Lost</strong></p>
                    <p class='w-1/6'><strong>Points</strong></p>
                </div>}
            {props.data.players.sort((a, b) => b.points - a.points).map((player, index) => (
                <div class='flex w-1/2 m-auto'>
                    <p class='w-2/6'>{player.name}</p>
                    <p class='w-1/6'>{player.games} / 37</p>
                    <p class='w-1/6'>{player.won}</p>
                    <p class='w-1/6'>{player.lost}</p>
                    <p class='w-1/6'>{player.won} / 37</p>
                </div>
            ))}
        </div>
    )

}

export default ChallengeTable