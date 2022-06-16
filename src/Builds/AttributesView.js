const AttributesView = (props) => {

    const getAttribute = (attribute) => {
        switch (attribute) {
            case 'drush':
                return 'Drush'
            case 'fastFeudal':
                return 'Fast Feudal'
            case 'fastCastle':
                return 'Fast Castle'
            case 'fastImperial':
                return 'Fast Imperial'
            case 'water':
                return 'Water/Hybrid'
            case 'arena':
                return 'Arena'
            case 'meme':
                return 'Meme'
            default:
                return 'Unknown'
        }
    }
    
    return (
        <div class='flex space-x-2 h-fit'>
            {props.attributes !== undefined && props.attributes.map(attribute => (
                <div class='bg-secondary-light text-main-dark px-2 rounded-md'>{getAttribute(attribute)}</div>
            ))}
        </div>
    )
}

export default AttributesView