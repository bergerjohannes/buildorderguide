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
            <ul>
                {builds !== undefined && builds.map(build => (
                    <BuildPreviewCard build={build} />
                ))}
            </ul>
        </div>
    )
}

export default BuildsOverview