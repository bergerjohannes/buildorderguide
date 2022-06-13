import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../Auth/Auth.js'
import Menu from '../UI/Menu'
import DatabaseService from '../DatabaseService.js'
import BuilderOverviewTable from './BuilderOverviewTable.js'
import { Navigate } from "react-router-dom";

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
            <div class='w-1/2 m-auto'>
                <h1 class=''>Build Order Builder</h1>
                {builds !== undefined && <BuilderOverviewTable builds={builds} />}
                {user !== undefined && <button class='p-2 bg-black rounded-md shadow-md text-white my-8 mx-auto block' onClick={addNewBuild}>New Build</button>}
            </div>
        </div>
    )


}

export default BuilderOverview