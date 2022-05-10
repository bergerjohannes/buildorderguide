const DifficultyIndicator = (props) => {

    const getText = (difficulty) => {
        switch (difficulty) {
            case 1:
                return 'Beginner'
            case 2:
                return 'Intermediate'
            case 3:
                return 'Advanced'
            default:
                return 'Unknown'
        }
    }

    return (
        <span class='flex pace-x-2 text-gray-600'>
            <div class='flex bg-slate-300 pl-1 pr-2 rounded-md'>
            {props.difficulty === 1 && <img class='w-6 h-6' src={require('../Images/Medals/Bronze.png')} alt='Beginner Icon' />}
            {props.difficulty === 2 && <img class='w-6 h-6' src={require('../Images/Medals/Silver.png')} alt='Intermediate Icon' />}
            {props.difficulty === 3 && <img class='w-6 h-6' src={require('../Images/Medals/Gold.png')} alt='Advanced Icon' />}
            <span>{getText(props.difficulty)}</span>
            </div>
        </span>
    )
}

export default DifficultyIndicator