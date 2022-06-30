import React, { useState, useEffect } from 'react'
import BuildPreviewCard from './BuildPreviewCard'
import DatabaseService from '../DatabaseService'
import Menu from '../UI/Menu'
import Heading1 from '../UI/Heading1'
import LoadingIndicator from '../UI/LoadingIndicator'
import FilterView from './FilterView'
import * as Constants from '../Constants'
import Input from '../UI/Input'

const BuildsOverview = (props) => {
    const [builds, setBuilds] = useState([])
    const [searchQuery, setSearchQuery] = useState(null)
    const [civilization, setCivilization] = useState(Constants.Civ.Generic)
    const [type, setType] = useState('All')
    const [sorting, setSorting] = useState(Constants.Sorting.Alphabetically)

    useEffect(() => {
        DatabaseService.loadAllPublishedBuilds().then(b => {
            setBuilds(b)
        })
    }, [])

    const handleSearch = (event) => {
        const search = event.target.value === '' ? null : event.target.value
        setSearchQuery(search)
    }

    let buildsToDisplay = builds
    if (searchQuery !== null) {
        buildsToDisplay = builds.filter(build => build.title.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1 || (build.civilization !== Constants.Civ.Generic && build.civilization.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1) || build.attributes.filter(attribute => attribute.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1).length > 0 || build.author.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1 || `${build.pop.feudalAge}`.indexOf(searchQuery.trim().toUpperCase()) !== -1)
    }
    if (civilization !== null) {
        buildsToDisplay = buildsToDisplay.filter(build => civilization === Constants.Civ.Generic || build.civilization.toUpperCase().indexOf(civilization.trim().toUpperCase()) !== -1)
    }

    if (type !== null) {
        buildsToDisplay = buildsToDisplay.filter(build => type === 'All' || build.attributes.filter(attribute => attribute.toUpperCase().indexOf(type.trim().toUpperCase()) !== -1).length > 0)
    }

    if (sorting === Constants.Sorting.Alphabetically) {
        buildsToDisplay = buildsToDisplay.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    }

    return (
        <div>
            <Menu />
            <Heading1>Builds</Heading1>
            {builds.length === 0 && <LoadingIndicator text={'Loading build orders ..'} />}
            {builds.length > 0 && <div class='w-full flex justify-center mb-5'><FilterView civilization={civilization} setCivilization={setCivilization} type={type} setType={setType} handleSearch={handleSearch} sorting={sorting} setSorting={setSorting}/></div>}
            {builds.length > 0 && <div class='w-11/12 md:w-1/2 lg:1/2 xl:w-1/3 m-auto'><Input placeholder='Search builds' onChange={handleSearch} /></div>}
            <div class='w-11/12 md:w-9/12 m-auto flex flex-wrap justify-center'>
                {buildsToDisplay !== undefined && buildsToDisplay.map(build => (
                    <BuildPreviewCard build={build} />
                ))}
            </div>
        </div>
    )
}

export default BuildsOverview