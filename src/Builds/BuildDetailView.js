import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DatabaseService from '../DatabaseService'
import Sidebar from '../UI/Sidebar'
import BuildView from './BuildView'

const BuildDetailView = (props) => {
    let { buildId } = useParams()
    const [build, setBuild] = useState(undefined)

    useEffect(() => {
        DatabaseService.loadPublishedBuildWithId(buildId).then(b => {
            setBuild(b)
        })
    }, [])

    return (
        <div>
            <Sidebar />
            {build && <BuildView build={build}/>}
        </div>
    )
}

export default BuildDetailView