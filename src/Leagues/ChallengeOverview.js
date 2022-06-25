import { useState, useEffect } from 'react'
import { useUserAuth } from '../Auth/Auth'
import Menu from '../UI/Menu'
import DatabaseService from '../DatabaseService'
import CivChallengeView from './CivChallengeView'
import ChallengeService from './ChallengeService'
import ChallengeTable from './ChallengeTable'
import Heading1 from '../UI/Heading1'
import Paragraph from '../UI/Paragraph'
import LoadingIndicator from '../UI/LoadingIndicator'
import * as Constants from '../Constants'
import ErrorView from '../UI/ErrorView'

const ChallengeOverview = (props) => {
    const date = new Date()
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1)
    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1)
    endDate.setDate(endDate.getDate() - 1)

    const { user } = useUserAuth()
    const [profileId, setProfileId] = useState(undefined)
    const [month, setMonth] = useState(date.getMonth())
    const [year, setYear] = useState(date.getFullYear())
    const [start, setStart] = useState(startDate)
    const [end, setEnd] = useState(endDate)
    const [league, setLeague] = useState(undefined)
    const [civChallenge, setCivChallenge] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        DatabaseService.loadProfileInfo(user).then(userData => {
            setProfileId(userData.profile_id)
        })
    }, [user])

    useEffect(() => {
        if (profileId === undefined || profileId === '') {
            setError(Constants.Error.ProfileIdMissing)
            return
        }

        fetch('https://us-central1-build-order-guide.cloudfunctions.net/getCivChallengeProgress?profile_id=' + profileId + '&year=' + year + '&month=' + month)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error !== undefined) {
                    setError(true)
                } else {
                    const preppedData = ChallengeService.prepareDataForLeagueTable(responseJson, profileId)
                    setLeague(preppedData[0])
                    setCivChallenge(preppedData[1])
                    setError(false)
                }
            }).catch((error) => {
                console.log(`Couldn't load civ challenge data: ${error}`)
                setError(true)
            })
    }, [profileId])

    if (error === Constants.Error.ProfileIdMissing) return (
        <div class='text-center'>
            <Menu />
            <Heading1>Civ Challeng</Heading1>
            <ErrorView title={'Profile Id missing'} description={'To load your stats, please enter your AoE II Profile Id.'} callToAction={'Add Id'} callToActionLink={'/profile'} />
        </div>
    )

    if (profileId === undefined) return (
        // Before id is loaded
        <div class='text-center'>
            <Menu />
            <Heading1>Civ Challeng</Heading1>
        </div>
    )

    return (
        <div>
            <Menu />
            <div class='text-center'>
                <Heading1>Civ Challenge</Heading1>
                <Paragraph><b>{start.toDateString()}</b> until <b>{end.toDateString()}</b></Paragraph>
                {league === undefined && <LoadingIndicator text={'Loading match data ..'} />}
                {league !== undefined && <ChallengeTable data={league} />}
                {civChallenge !== undefined && <CivChallengeView data={civChallenge} />}
                {civChallenge !== undefined && <Paragraph>Play one match with every civ available. The first ranked 1v1 RM match with a given civ will be counted.</Paragraph>}
            </div>
        </div>
    )
}

export default ChallengeOverview