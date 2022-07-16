import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DatabaseService from '../DatabaseService'
import Menu from '../UI/Menu'
import BuildView from './BuildView'
import * as Constants from '../Constants'
import ErrorView from '../UI/ErrorView'
import { useUserAuth } from '../Auth/Auth'

const BuildDetailView = (props) => {
    const { user } = useUserAuth()
    let { buildId } = useParams()
    const [build, setBuild] = useState(undefined)
    const [rating, setRating] = useState(undefined)
    const [userRating, setUserRating] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        DatabaseService.loadPublishedBuildWithId(buildId).then(b => {
            setBuild(b)
        }).catch(e => {
            setError(Constants.Error.BuildNotExistent)
        })
        DatabaseService.loadAverageRatingForBuild(buildId).then(r => {
            setRating(r)
        })
    }, [])

    useEffect(() => {
        if (user === undefined || user === null) return

        DatabaseService.loadUserRatingForBuild(buildId, user.uid).then(r => {
            setUserRating(r.rating)
        })
    }, [user])

    const rateBuild = (stars) => {
        if (user === null) {
            alert('Make sure you are logged in to rate builds!') // TODO: Pop up with CTA to log in or sign up instead
            return
        }

        DatabaseService.rateBuildWithIdForUser(buildId, user, stars).then(() => {
            setUserRating(stars)
        })
    }

    if (error === Constants.Error.BuildNotExistent) return (
        <div class='text-center'>
            <Menu />
            <ErrorView title={'Error loading build'} description={'Seems like the build you are looking for doesn\'t exist.'} />
        </div>
    )

        if (build !== undefined) console.log(JSON.stringify(build))

    return (
        <div>
            <Menu />
            {build && <BuildView live={true} build={build} rating={rating?.avg_rating} userRating={userRating} rateBuild={rateBuild} />}
        </div>
    )
}

export default BuildDetailView