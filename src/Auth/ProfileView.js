
import React, { useState, useEffect } from 'react'
import DatabaseService from '../DatabaseService'
import { useUserAuth } from './Auth'

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
            <div class='flex flex-col justify-center flex-wrap w-full'>
                <h1 class='text-gray-600 text-center text-3xl mt-20'>Profile</h1>
                <p class='w-full text-center mt-8'>Welcome, {user.email}</p>
                <button class='w-fit bg-black text-white hover:bg-white hover:shadow-lg hover:text-black rounded-md p-2 mx-auto m-4' onClick={handleLogOut}>Log out</button>
                <h3 class='text-center mt-20'>Age of Empires II Profile Id</h3>
                <img class='w-11/12 max-w-lg mx-auto' src={require('../Images/Aoe2NetId.png')} alt='Aoe2.net Id' />
                <br />
                <p class='text-center'>Go to AoE2.net & search for your profile to find your Id in the URL.</p>
                <input class='w-full max-w-xl text-center md:text-left text-xl m-5 p-2 rounded-md bg-gray-50 shadow-inner mx-auto' name='profile_id' type='text' placeholder='Profile Id' value={profileId} onChange={value => setProfileId(value.value)} />
                <button class='w-fit bg-black text-white hover:bg-white hover:shadow-lg hover:text-black rounded-md p-2 mx-auto m-4' onClick={save}>Save Id</button>
            </div>
        </div>
    )

}

export default ProfileView