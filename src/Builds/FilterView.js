import * as Constants from '../Constants'
import Filter from '../UI/Filter'
import Heading2 from '../UI/Heading2'
import CivInfoService from '../Uptime/CivInfoService'
import BuildData from './BuildData'

const FilterView = (props) => {

    let civOptions = [
        { value: Constants.Civ.Generic, label: <div class='flex space-x-2'><img class='w-8 h-8' src={require('../Images/Civilizations/Generic.png')} alt={Constants.Civ.Generic} /><span >All</span></div> },
        { value: Constants.Civ.Meso, label: <div class='flex space-x-2'><img class='w-8 h-8' src={require('../Images/Civilizations/Meso.png')} alt={Constants.Civ.Meso} /><span >Meso</span></div> }
    ]
    CivInfoService.getCivilizations().forEach((item, i) => {
        civOptions.push({ value: item, label: <div class='flex space-x-2'><img class='w-8 h-8' src={require('../Images/Civilizations/' + item + '.png')} alt={item} /><span >{item}</span></div> })
    })

    let typeOptions = [{value: 'All', label: 'All'}]
    typeOptions = typeOptions.concat(BuildData.getBuildAttributes())

    return (
        <details class='my-12 text-xl'>
            <summary class='text-center cursor-pointer'>Filters</summary>
            <div class='flex justify-center items-center space-x-8 text-center w-1/4 m-auto'>
                <div class='mt-6 w-1/2'>
                    <Heading2>Civilization</Heading2>
                    <Filter isSearchable={true} value={props.civilization} onChange={event => props.setCivilization(event.value)} options={civOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} placeholder='Select civilization' />
                </div>
                <div class='mt-6 w-1/2'>
                    <Heading2>Type</Heading2>
                    <Filter isSearchable={true} value={props.type} onChange={event => props.setType(event.value)} options={typeOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} placeholder='Select type' />
                </div>
            </div>
        </details>

    )
}

export default FilterView