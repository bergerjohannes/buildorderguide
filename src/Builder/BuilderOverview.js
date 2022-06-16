import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../Auth/Auth.js'
import Menu from '../UI/Menu'
import DatabaseService from '../DatabaseService.js'
import BuilderOverviewTable from './BuilderOverviewTable.js'
import { Navigate } from "react-router-dom";
import Heading1 from '../UI/Heading1.js'
import CenteredButton from '../UI/CenteredButton.js'

const BuilderOverview = (props) => {

    const { user } = useUserAuth()
    const [builds, setBuilds] = useState(undefined)
    const [loadallBuilds, setLoadAllBuilds] = useState(false) // ToDO: Implement way for admin to see all builds
    const [redirect, setRedirect] = useState(undefined)

    useEffect(() => {
        if (loadallBuilds) {
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

    }, [user])

    const addNewBuild = () => {
        if (user === undefined) return

        DatabaseService.addNewBuildforPublisher(user.uid).then(id => {
            setRedirect(id)
        }, (error) => {
            console.log(error)
        })
    }

    if (redirect !== undefined) return <Navigate to={`/builder/build/${redirect}`} />

    return (
        <div>
            <Menu />
            <div class='w-full md:w-1/2 m-auto'>
                <Heading1>Build Order Builder</Heading1>
                {builds !== undefined && <BuilderOverviewTable builds={builds} />}
                {user !== undefined && <CenteredButton onClick={addNewBuild}>New Build</CenteredButton>}
            </div>
        </div>
    )


}

export default BuilderOverview