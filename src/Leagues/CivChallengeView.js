import CivInfoService from '../Uptime/CivInfoService'

const CivChallengeView = (props) => {
    const getCivilizationImage = (civ, index) => {
        const data = props.data.filter(x => x.civ === index)
        
        // not played yet
        let style = {opacity: 0.05}
        if (data.length > 0 && data[0].won !== true) {
            // played but lost
            style = {opacity: 0.6, webkitFilter: 'brightness(50%)'}
        } else if (data.length > 0 && data[0].won === true) {
            // played and won
            style = {opacity: 1}
        }

        return <img class='w-16 h-16 m-4' style={style} src={require('../Images/Civilizations/' + civ + '.png')} alt={civ} />
    }

    return (
        <div class='w-full md:w-1/2 p-0 flex-wrap m-auto flex justify-center'>
            {CivInfoService.getCivilizations().map((civ, index) => (
                <>{getCivilizationImage(civ, index)}</>
            ))}
        </div>
    )

}

export default CivChallengeView