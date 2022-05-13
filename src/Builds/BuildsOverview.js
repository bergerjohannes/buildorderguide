import React, { useState, useEffect } from 'react'
import BuildPreviewCard from './BuildPreviewCard'
import DatabaseService from '../DatabaseService'

const BuildsOverview = (props) => {
    const [builds, setBuilds] = useState([])

    useEffect(() => {
        DatabaseService.loadAllPublishedBuilds().then(b => {
            setBuilds(b)
        })
    }, [])

    return (
        <div>
            <h1 class='text-4xl text-center bold text-gray-600'>All published builds</h1>
            <div class='flex flex-wrap justify-center'>
                {builds !== undefined && builds.map(build => (
                    <BuildPreviewCard build={build} />
                ))}
            </div>
        </div>
    )
}

export default BuildsOverview