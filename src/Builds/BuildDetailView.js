import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DatabaseService from '../DatabaseService'
import Menu from '../UI/Menu'
import BuildView from './BuildView'
import * as Constants from '../Constants'
import ErrorView from '../UI/ErrorView'

const BuildDetailView = (props) => {
    let { buildId } = useParams()
    const [build, setBuild] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        DatabaseService.loadPublishedBuildWithId(buildId).then(b => {
            setBuild(b)
        }).catch(e => {
            setError(Constants.Error.BuildNotExistent)
        })
    }, [])

    if (error === Constants.Error.BuildNotExistent) return (
        <div class='text-center'>
            <Menu />
            <ErrorView title={'Error loading build'} description={'Seems like the build you are looking for doesn\'t exist.'} />
        </div>
    )

    return (
        <div>
            <Menu />
            {build && <BuildView build={build} />}
        </div>
    )
}

export default BuildDetailView