import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../Auth/Auth.js'
import Menu from '../UI/Menu'
import DatabaseService from '../DatabaseService.js'
import BuilderOverviewTable from './BuilderOverviewTable.js'
import { Navigate } from "react-router-dom";
import Heading1 from '../UI/Heading1.js'
import CenteredButton from '../UI/CenteredButton.js'
import LoadingIndicator from '../UI/LoadingIndicator.js'
import Switch from '../UI/Switch.js'
import * as Constants from '../Constants'

const BuilderOverview = (props) => {

    const { user } = useUserAuth()
    const [builds, setBuilds] = useState(undefined)
    const [loadAllBuilds, setLoadAllBuilds] = useState(false)
    const [redirect, setRedirect] = useState(undefined)

    useEffect(() => {
        if (loadAllBuilds) {
            DatabaseService.loadAllBuildsForAdmin().then(data => {
                setBuilds(data)
            }, (error) => {
                console.log(error)
            })
        } else {
            DatabaseService.loadAllBuildsForPublisher(user.uid).then(data => {
                setBuilds(data)
            }, (error) => {
                console.log(error)
            })
        }
    }, [user, loadAllBuilds])

    const addNewBuild = () => {
        if (user === undefined) return

        DatabaseService.addNewBuildforPublisher(user.uid).then(id => {
            setRedirect(id)
        }, (error) => {
            console.log(error)
        })
    }

    if (redirect !== undefined) return <Navigate to={`/builder/build/${redirect}`} />

    const selectBuildLoadingPreferenceOption = (option) => {
        setLoadAllBuilds(option === 0 ? false : true)
    }

    const isAdmin = () => user.uid === Constants.OfficialPublisherId

    return (
        <div>
            <Menu />
            <div class='w-full md:w-1/2 m-auto'>
                <Heading1>Build Order Builder</Heading1>
                {isAdmin() && <div class='flex justify-center w-1/2 mx-auto my-4'><Switch option1={'My builds'} option2={'All builds'} slectedOptionIndex={loadAllBuilds === false ? 0 : 1} selectOption={selectBuildLoadingPreferenceOption} /></div>}
                {builds === undefined && <LoadingIndicator text={'Loading build orders ..'} />}
                {builds !== undefined && <BuilderOverviewTable builds={builds} />}
                {builds !== undefined && <CenteredButton onClick={addNewBuild}>New Build</CenteredButton>}
            </div>
        </div>
    )


}

export default BuilderOverview