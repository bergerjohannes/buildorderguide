import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DatabaseService from '../DatabaseService'
import AttributesView from './AttributesView'
import BuildOrderStepsView from './BuildOrderStepsView'
import DifficultyIndicator from './DifficultyIndicator'
import PopIndicator from './PopIndicator'
import UptimeIndicator from './UptimeIndicator'
import BuildData from './BuildData'

const BuildView = (props) => {
    let { buildId } = useParams()
    const [build, setBuild] = useState(undefined)

    useEffect(() => {
        DatabaseService.loadPublishedBuildWithId(buildId).then(b => {
            setBuild(b)
        })
    }, [])

    if (build === undefined) return (<></>)

    const buildTitle = BuildData.getTitleForBuild(build)

    return (
        <div class='flex flex-col space-y-4'>
            <div class='flex justify-center'>{build.imageURL !== null && build.imageURL !== undefined && <img class='h-32 w-32' src={build.imageURL} alt={(buildTitle)} />}</div>
            <div class='flex justify-center'>{build.imageURL === null || build.imageURL === undefined && <img class='h-32 w-32' src={require('../Images/BuildImagePlaceholder.png')} alt={buildTitle} />}</div>
            <div class='text-center'><h1 class='text-3xl text-gray-600'>{buildTitle}</h1></div>
            <div class='text-center'><p class='text-gray-600'>{build.author}</p></div>
            <div class='m-auto md:max-w-lg w-11/12 text-center'><p class='text-gray-600'>{build.description}</p></div>
            <div class='flex justify-center'><PopIndicator pop={build.pop} /></div>
            <div class='flex justify-center'><UptimeIndicator uptime={build.uptime} /></div>
            <div class='flex justify-center'><AttributesView attributes={build.attributes} /></div>
            <div class='flex justify-center'><DifficultyIndicator difficulty={build.difficulty} /></div>
            <BuildOrderStepsView build={build.build}/>
        </div>
    )
}

export default BuildView