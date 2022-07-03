import * as Constants from '../Constants'
import Filter from '../UI/Filter'
import CivInfoService from '../Uptime/CivInfoService'
import BuildData from './BuildData'
import { useState } from 'react'
import CivView from '../UI/CivView'

const FilterView = (props) => {

    const [showFilters, setShowFilters] = useState(true)

    let civOptions = [
        { value: Constants.Civ.Generic, label: <CivView civ={Constants.Civ.All} />},
        { value: Constants.Civ.Meso, label: <CivView civ={Constants.Civ.Meso} /> }
    ]
    CivInfoService.getCivilizations().forEach(civ => {
        civOptions.push({ value: civ, label: <CivView civ={civ} />})
    })

    let typeOptions = [{ value: 'All', label: 'All' }]
    typeOptions = typeOptions.concat(BuildData.getBuildAttributes())

    let sortOptions = [{ value: Constants.Sorting.Alphabetically, label: Constants.Sorting.Alphabetically }, { value: Constants.Sorting.FavoritesOnly, label: Constants.Sorting.FavoritesOnly }]

    return (
        <div class='w-full flex justify-center text-main-dark' onClick={(event) => { setShowFilters(!showFilters); event.preventDefault() }}>
            <div class='flex justify-center w-11/12 md:w-1/2 lg:1/2 xl:w-1/3 border-2 rounded-sm text-center border-secondary-light'>
                <div class='w-1/3'>
                    <label class='text-xs text-main-dark'>Civ</label>
                    <Filter isDisabled={false} isSearchable={true} value={props.civilization} onChange={event => props.setCivilization(event.value)} options={civOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} placeholder='All' />
                </div>
                <div class='w-0.5 h-3/4 my-auto rounded-md bg-secondary-light'></div>
                <div class='w-1/3'>
                    <label class='text-xs text-main-dark'>Type</label>
                    <Filter isDisabled={false} isSearchable={false} value={props.type} onChange={event => props.setType(event.value)} options={typeOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} placeholder='All' />
                </div>
                <div class='w-0.5 h-3/4 my-auto rounded-md bg-secondary-light'></div>
                <div class='w-1/3'>
                    <label class='text-xs text-main-dark'>Display</label>
                    <Filter isDisabled={false} isSearchable={false} value={props.sorting} onChange={event => props.setSorting(event.value)} options={sortOptions} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} placeholder='Alphabetically' />
                </div>
            </div>
        </div>
    )
}

export default FilterView