const PopIndicator = (props) => {
    return (
        <div class='flex space-x-2 text-main-dark'>
            {props.pop !== undefined && props.pop.feudalAge !== undefined && <div class='flex bg-secondary-light pl-1 pr-2 rounded-md'><img class='w-6 h-6' src={require('../Images/Ages/feudalAge.png')} alt='Feudal Age' /><span className='popIndicator'>{props.pop.feudalAge}</span></div>}
            {props.pop !== undefined && props.pop.castleAge !== undefined && <div class='flex bg-secondary-light pl-1 pr-2 rounded-md'><img class='w-6 h-6' src={require('../Images/Ages/castleAge.png')} alt='Castle Age' /><span className='popIndicator'>+{props.pop.castleAge}</span></div>}
            {props.pop !== undefined && props.pop.imperialAge !== undefined && <div class='flex bg-secondary-light pl-1 pr-2 rounded-md'><img class='w-6 h-6' src={require('../Images/Ages/imperialAge.png')} alt='Imperial Age' /><span className='popIndicator'>+{props.pop.imperialAge}</span></div>}
        </div>
    )
}

export default PopIndicator