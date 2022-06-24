
import React, { useState, useEffect } from 'react'
import DatabaseService from '../DatabaseService'
import { useUserAuth } from './Auth'
import Menu from '../UI/Menu'
import Input from '../UI/Input'
import Button from '../UI/Button'
import Heading1 from '../UI/Heading1'
import ParagraphCentered from '../UI/ParagraphCentered'
import Heading2 from '../UI/Heading2'
import Centered from '../UI/Centered'

const ProfileView = (props) => {
    const { user, logOut } = useUserAuth()
    const [email, setEmail] = useState('')
    const [profileId, setProfileId] = useState('')

    const handleLogOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(`Error logging out: ${error}`)
        }
    }

    const save = () => {
        console.log(`Save new profile id for user ${user.uid}: email: ${email} and id: ${profileId}`)
        DatabaseService.saveProfileInfo(user, email, profileId)
    }

    useEffect(() => {
        DatabaseService.loadProfileInfo(user).then(userData => {
            setEmail(userData.email)
            setProfileId(userData.profile_id)
        })
    }, [user])


    return (
        <div>
            <Menu />
            <div class='flex flex-col justify-center flex-wrap w-full'>
                <Heading1>Profile</Heading1>
                <ParagraphCentered>Welcome, {user.email}</ParagraphCentered>
                <Button onClick={handleLogOut}>Log out</Button>
                <div class='flex justify-center mt-20'><Heading2 class='text-center mt-20'>Age of Empires II Profile ID</Heading2></div>
                <img class='w-11/12 max-w-lg mx-auto' src={require('../Images/Aoe2NetId.png')} alt='Aoe2.net ID' />
                <ParagraphCentered>Add your profile ID to see your stats.<br />Go to <a class='font-semibold' href='https://aoe2.net' target='_blank'>AoE2.net</a> and search for your profile to find your ID in the URL.</ParagraphCentered>
                <Centered>
                    <Input placeholder='Profile ID' value={profileId} onChange={event => setProfileId(event.target.value)} />
                </Centered>
                <Button onClick={save}>Save ID</Button>
            </div>
        </div>
    )

}

export default ProfileView