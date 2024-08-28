const CivView = (props) => {
    const imageClasses = props.compact ? 'w-6 h-6 md:w-8 md:h-8' : 'w-6 h-6 md:w-8 md:h-8 mr-1';
    return(
        <div className='flex items-center space-x-1 text-main-dark'>
            <img className={imageClasses} src={require('../Images/Civilizations/' + props.civ + '.png')} alt={props.civ} />
            <span>{props.civ}</span>
        </div>
    )
}

export default CivView