import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort, faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons'
import * as Constants from '../Constants'
import Filter from '../UI/Filter'
import Heading2 from '../UI/Heading2'
import CivInfoService from '../Uptime/CivInfoService'
import BuildData from './BuildData'
import { useState } from 'react'
import Centered from '../UI/Centered'
import Input from '../UI/Input'

const FilterView = (props) => {

    const [showFilters, setShowFilters] = useState(false)

    let civOptions = [
        { value: Constants.Civ.Generic, label: <div class='flex space-x-2'><img class='w-8 h-8' src={require('../Images/Civilizations/Generic.png')} alt={Constants.Civ.Generic} /><span >All</span></div> },
        { value: Constants.Civ.Meso, label: <div class='flex space-x-2'><img class='w-8 h-8' src={require('../Images/Civilizations/Meso.png')} alt={Constants.Civ.Meso} /><span >Meso</span></div> }
    ]
    CivInfoService.getCivilizations().forEach((item, i) => {
        civOptions.push({ value: item, label: <div class='flex space-x-2'><img class='w-8 h-8' src={require('../Images/Civilizations/' + item + '.png')} alt={item} /><span >{item}</span></div> })
    })

    let typeOptions = [{ value: 'All', label: 'All' }]
    typeOptions = typeOptions.concat(BuildData.getBuildAttributes())

    return (
        <div class='my-12 text-xl text-center m-auto p-6 w-11/2 md:w-9/12 lg:w-1/2'>
            <button class='p-4 bg-secondary-light rounded-sm text-main-dark' onClick={() => setShowFilters(!showFilters)}><span class='mr-2'>Filters</span><FontAwesomeIcon icon={showFilters ? faArrowUpShortWide : faArrowDownWideShort} /></button>
            <div class={showFilters ? 'block' : 'hidden'}>
                <div class='w-full flex flex-col space-y-4'>
                <div class='w-full flex justify-center items-center space-x-8 text-center m-auto'>
                    <div class='mt-6 w-1/2 lg:w-1/4'>
                        <Heading2>Civilization</Heading2>
                        <Filter isSearchable={true} value={props.civilization} onChange={event => props.setCivilization(event.value)} options={civOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} placeholder='Select civ' />
                    </div>
                    <div class='mt-6 w-1/2 lg:w-1/4'>
                        <Heading2>Type</Heading2>
                        <Filter isSearchable={true} value={props.type} onChange={event => props.setType(event.value)} options={typeOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} placeholder='Select type' />
                    </div>
                </div>
                <Centered><Input placeholder='Search builds' onChange={props.handleSearch} /></Centered>
                </div>
            </div>
        </div>

    )
}

export default FilterView