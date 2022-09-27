import * as Constants from '../Constants'
import Filter from '../UI/Filter'
import CivInfoService from '../Uptime/CivInfoService'
import BuildData from './BuildData'
import { useState } from 'react'
import CivView from '../UI/CivView'

const FilterSubView = (props) => {
    return (
        <div class='w-1/3'>
            <label class='text-xs text-main-dark'>{props.name}</label>
            <Filter isDisabled={props.isDisabled} isSearchable={props.isSearchable} value={props.value} onChange={props.onChange} options={props.options} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} placeholder={props.placeholder} />
        </div>
    )
}

const FilterViewSeparator = (props) => {
    return (
        <div class='w-0.5 h-3/4 my-auto rounded-md bg-secondary-light'></div>
    )
}

const FilterView = (props) => {

    const [showFilters, setShowFilters] = useState(true)

    let civOptions = [
        { value: Constants.Civ.Generic, label: <CivView civ={Constants.Civ.All} /> },
        { value: Constants.Civ.Meso, label: <CivView civ={Constants.Civ.Meso} /> }
    ]
    CivInfoService.getCivilizations().forEach(civ => {
        civOptions.push({ value: civ, label: <CivView civ={civ} /> })
    })

    let buildOrderTypeOptions = [{ value: 'All', label: 'All' }]
    buildOrderTypeOptions = buildOrderTypeOptions.concat(BuildData.getBuildAttributes())

    let sortOptions = [{ value: Constants.Sorting.Alphabetically, label: Constants.Sorting.Alphabetically }, { value: Constants.Sorting.ByRating, label: Constants.Sorting.ByRating }, { value: Constants.Sorting.FavoritesOnly, label: Constants.Sorting.FavoritesOnly }]

    return (
        <div class='w-full flex justify-center text-main-dark' onClick={(event) => { setShowFilters(!showFilters); event.preventDefault() }}>
            <div class='flex justify-center w-11/12 md:w-1/2 lg:1/2 xl:w-1/3 border-2 rounded-sm text-center border-secondary-light'>
                {props.civilization && <>
                    <FilterSubView name={'Civ'} value={props.civilization} isSearchable={true} options={civOptions} placeholder={'All'} onChange={event => props.setCivilization(event.value)} />
                </>}
                {props.buildOrderType && <>
                    <FilterViewSeparator />
                    <FilterSubView name={'Type'} value={props.buildOrderType} isSearchable={false} options={buildOrderTypeOptions} placeholder={'All'} onChange={event => props.setBuildOrderType(event.value)} />
                </>}
                {props.sorting && <>
                    <FilterViewSeparator />
                    <FilterSubView name={'Display'} value={props.sorting} isSearchable={false} options={sortOptions} placeholder={'Alphabetically'} onChange={event => props.setSorting(event.value)} />
                </>}
            </div>
        </div>
    )
}

export default FilterView