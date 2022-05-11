import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DatabaseService from '../DatabaseService'
import AttributesView from './AttributesView'
import DifficultyIndicator from './DifficultyIndicator'
import PopIndicator from './PopIndicator'
import UptimeIndicator from './UptimeIndicator'

const BuildView = (props) => {
    let { buildId } = useParams()
    const [build, setBuild] = useState(undefined)

    useEffect(() => {
        DatabaseService.loadPublishedBuildWithId(buildId).then(b => {
            setBuild(b)
        })
    }, [])

    if (build === undefined) return (<></>)

    return (
        <div class='flex flex-col space-y-4'>
            <div class='flex justify-center'>{build.imageURL !== null && build.imageURL !== undefined && <img class='h-24 w-24' src={build.imageURL} alt={build.title} />}</div>
            <div class='flex justify-center'>{build.imageURL === null || build.imageURL === undefined && <img class='h-24 w-24' src={require('../Images/BuildImagePlaceholder.png')} alt={build.title} />}</div>
            <div class='text-center'><h1>{build.title}</h1></div>
            <div class='m-auto max-w-lg text-center'><p>{build.description}</p></div>
            <div class='flex justify-center'><PopIndicator pop={build.pop} /></div>
            <div class='flex justify-center'><UptimeIndicator uptime={build.uptime} /></div>
            <div class='flex justify-center'><AttributesView attributes={build.attributes} /></div>
            <div class='flex justify-center'><DifficultyIndicator difficulty={build.difficulty} /></div>
            <div class='text-center'><p>{build.author}</p></div>

        </div>
    )
}

export default BuildView