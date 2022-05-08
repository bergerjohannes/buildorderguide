import React, { useState, useEffect } from 'react'
import DatabaseService from './DatabaseService'

const BuildsOverview = (props) => {
    const [builds, setBuilds] = useState([])

    useEffect(() => {
        DatabaseService.loadAllPublishedBuilds().then(b => {
            setBuilds(b)
        })

    }, [])

    return (
        <div>
            <h1 class='text-2xl'>All published builds</h1>
            <ul>
                {builds !== undefined && builds.map(build => (
                    <li>{build.title}</li>
                ))}
            </ul>

        </div>
    )
}

export default BuildsOverview