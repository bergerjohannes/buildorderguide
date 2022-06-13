import React, { useState, useEffect } from 'react'
import BuildPreviewCard from './BuildPreviewCard'
import DatabaseService from '../DatabaseService'
import Menu from '../UI/Menu'

const BuildsOverview = (props) => {
    const [builds, setBuilds] = useState([])
    const [searchQuery, setSearchQuery] = useState(null)

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
        buildsToDisplay = builds.filter(build => build.title.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1 || (build.civilization !== 'Generic' && build.civilization.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1) || build.attributes.filter(attribute => attribute.toUpperCase().indexOf(searchQuery.trim()) !== -1).length > 0 || build.author.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1 || `${build.pop.feudalAge}`.indexOf(searchQuery.trim().toUpperCase()) !== -1)
    }

    return (
        <div>
            <Menu />
            <h1 class='text-4xl text-center bold text-gray-600 my-10'>Build Order Guide</h1>
            {builds !== undefined && <input class='block shadow-inner rounded-md p-2 mx-auto my-4 outline-gray-600 text-gray-600' placeholder='Search builds' onChange={handleSearch} />}
            <div class='w-8/12 m-auto flex flex-wrap justify-center'>
                {buildsToDisplay !== undefined && buildsToDisplay.map(build => (
                    <BuildPreviewCard build={build} />
                ))}
            </div>
        </div>
    )
}

export default BuildsOverview