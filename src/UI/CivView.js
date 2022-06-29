const CivView = (props) => {
    return(
        <div class='flex space-x-1 text-main-dark'><img class='w-8 h-8' src={require('../Images/Civilizations/' + props.civ + '.png')} alt={props.civ} /><span class='pt-1'>{props.civ}</span></div>
    )
}

export default CivView