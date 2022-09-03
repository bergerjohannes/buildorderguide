import React, { useState, useEffect } from 'react'
import BuildPreviewCard from './BuildPreviewCard'
import DatabaseService from '../DatabaseService'
import Menu from '../UI/Menu'
import Heading1 from '../UI/Heading1'
import LoadingIndicator from '../UI/LoadingIndicator'
import FilterView from './FilterView'
import * as Constants from '../Constants'
import Input from '../UI/Input'
import { useUserAuth } from '../Auth/Auth'
import _ from 'lodash'
import EmptyState from '../UI/EmptyState'
import debounce from 'lodash/debounce'

const BuildsOverview = (props) => {
    const { user } = useUserAuth()
    const [builds, setBuilds] = useState([])
    const [ratings, setRatings] = useState([])
    const [searchQuery, setSearchQuery] = useState(null)
    const [civilization, setCivilization] = useState(Constants.Civ.Generic)
    const [buildOrderType, setBuildOrderType] = useState('All')
    const [sorting, setSorting] = useState(Constants.Sorting.Alphabetically)
    const [favorites, setFavorites] = useState([])
    const [buildsAndRatingsAdded, setBuildsAndRatingsAdded] = useState(false)

    useEffect(() => {
        DatabaseService.loadAllPublishedBuilds().then(b => {
            setBuilds(b)
        })
        DatabaseService.loadRatings().then(r => {
            setRatings(r)
        })
    }, [])

    useEffect(() => {
        if (user === null || user === undefined) return
        DatabaseService.loadProfileInfo(user).then(userData => {
            if (userData.favorites !== undefined) setFavorites(userData.favorites)
        })
    }, [user])

    useEffect(() => {
        combineRatingsAndBuilds()
    }, [builds])

    useEffect(() => {
        combineRatingsAndBuilds()
    }, [ratings])

    const combineRatingsAndBuilds = () => {
        if (buildsAndRatingsAdded) return

        if (builds.length > 0 && ratings.length > 0) {
            let buildsWithRating = builds.map(build => ({
                ...build,
                rating: ratings.filter(rating => rating.id === build.id)[0]?.avg_rating
            }))
            buildsWithRating = buildsWithRating.map(b => {
                if (b.rating === undefined) return { ...b, rating: 0 }
                else return b
            })
            setBuildsAndRatingsAdded(true)
            setBuilds(buildsWithRating)
        }
    }

    const favBuildWithId = (id) => {
        if (user === null) {
            alert('Make sure you are logged in to fav builds!') // TODO: Pop up with CTA to log in or sign up instead
            return
        }

        if (favorites.some(entry => entry === id)) {
            setFavorites(favorites.filter(entry => entry !== id))
            DatabaseService.removeFavBuildWithIdForUser(id, user)
        } else {
            setFavorites([...favorites, id])
            DatabaseService.favBuildWithIdForUser(id, user)
        }
    }

    const handleSearch = debounce(value => {
        const search = value === '' ? null : value
        setSearchQuery(search)
    }, 250)

    let buildsToDisplay = builds
    if (searchQuery !== null) {
        buildsToDisplay = builds.filter(build => build.title.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1 || (build.civilization !== Constants.Civ.Generic && build.civilization.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1) || build.attributes.filter(attribute => attribute.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1).length > 0 || build.author.toUpperCase().indexOf(searchQuery.trim().toUpperCase()) !== -1 || `${build.pop.feudalAge}`.indexOf(searchQuery.trim().toUpperCase()) !== -1)
    }
    if (civilization !== null) {
        buildsToDisplay = buildsToDisplay.filter(build => civilization === Constants.Civ.Generic || build.civilization.toUpperCase().indexOf(civilization.trim().toUpperCase()) !== -1)
    }

    if (buildOrderType !== null) {
        buildsToDisplay = buildsToDisplay.filter(build => buildOrderType === 'All' || build.attributes.filter(attribute => attribute.toUpperCase().indexOf(buildOrderType.trim().toUpperCase()) !== -1).length > 0)
    }

    if (sorting === Constants.Sorting.ByRating) {
        buildsToDisplay = _.orderBy(buildsToDisplay, ['rating', 'title'], ['desc', 'asc'])
    }

    if (sorting === Constants.Sorting.Alphabetically || sorting === Constants.Sorting.FavoritesOnly) {
        buildsToDisplay = _.orderBy(buildsToDisplay, ['title'], ['asc'])
    }

    if (sorting === Constants.Sorting.FavoritesOnly) {
        buildsToDisplay = buildsToDisplay.filter(build => favorites.some(entry => entry === build.id))
    }

    if (builds === undefined || builds.length === 0) buildsToDisplay = undefined

    return (
        <div>
            <Menu />
            <Heading1>Builds</Heading1>
            {builds.length === 0 && <LoadingIndicator text={'Loading build orders ..'} />}
            {builds.length > 0 && <div class='w-full flex justify-center mb-5'><FilterView civilization={civilization} setCivilization={setCivilization} buildOrderType={buildOrderType} setBuildOrderType={setBuildOrderType} handleSearch={handleSearch} sorting={sorting} setSorting={setSorting} /></div>}
            {builds.length > 0 && <div class='w-11/12 md:w-1/2 lg:1/2 xl:w-1/3 m-auto'><Input placeholder='Search builds' onChange={event => { handleSearch(event.target.value) }} /></div>}
            <div class='w-11/12 md:w-10/12 lg:w-9/12 mx-auto mb-10 flex flex-wrap justify-center'>
                {buildsToDisplay !== undefined && buildsToDisplay.map(build => (
                    <BuildPreviewCard build={build} fav={favorites.some(entry => entry === build.id)} favBuildWithId={favBuildWithId} />
                ))}
                {buildsToDisplay !== undefined && buildsToDisplay.length === 0 && <EmptyState>No builds found ..</EmptyState>}
            </div>
        </div>
    )
}

export default BuildsOverview