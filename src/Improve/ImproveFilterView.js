import * as Constants from '../Constants'
import Dropdown from '../UI/Dropdown'
import Heading2 from '../UI/Heading2'

const ImproveFilterSelectionView = (props) => {
    return (
        <span class='inline-block'>
            <Dropdown isDisabled={props.isDisabled} isSearchable={true} noSizeChange={true} value={props.value} options={props.options} placeholder={props.value} onChange={element => props.onChange(element.value)} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
        </span>
    )
}

const ImproveFilterView = (props) => {
    if (props.buildOrderOptions === undefined) return (<></>)
    return (
        <form class='flex flex-col mx-auto w-11/12 max-w-md my-12'>
            <div>
                <Heading2>Game type</Heading2>
                <Dropdown isDisabled={true} isSearchable={true} noSizeChange={true} value={props.gameMode} onChange={gameMode => props.setGameMode(gameMode.value)} options={props.gameModeOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
            </div>
            <div class='mt-6'>
                <Heading2>Build order</Heading2>
                <Dropdown isSearchable={true} noSizeChange={true} value={props.buildOrder} onChange={build => props.setBuildOrder(build.value)} options={props.buildOrderOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
            </div>
            <div class='mt-6'>
                <Heading2>Civ</Heading2>
                <Dropdown isSearchable={true} noSizeChange={true} value={props.civ} onChange={civ => props.setCiv(civ.value)} options={props.civOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
            </div>
            <div class='mt-6'>
                <Heading2>Map</Heading2>
                <Dropdown isSearchable={true} noSizeChange={true} value={props.map} onChange={map => props.setMap(map.value)} options={props.mapOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
            </div>
        </form>
    )
}

export default ImproveFilterView