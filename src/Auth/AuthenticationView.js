
import React, { useState } from 'react'
import * as Constants from '../Constants'
import { Navigate } from 'react-router-dom'
import LoadingIndicator from '../LoadingIndicator'
import EmailAndPasswordInputView from './EmailAndPasswordInputView'
import { useUserAuth } from './Auth'

const AuthenticationView = (props) => {

    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [status, setStatus] = useState(Constants.AuthStatus.Undefined)
    const [error, setError] = useState(undefined)
    const [callToAction] = useState(props.auth === Constants.AuthType.LogIn ? 'Log in' : 'Sign up')
    const [header] = useState(props.auth === Constants.AuthType.LogIn ? 'Log in' : 'Sign up')
    const [progressText] = useState(props.auth === Constants.AuthType.LogIn ? 'Logging you in ..' : 'Signing you up ..')

    const { signUp, logIn } = useUserAuth()

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)

    const authenticate = async () => {
        const validEmail = validateEmail(email)
        if (!validEmail) {
            setError('Please enter a valid email address')
            return
        }
        if (password === undefined || password.length < 6) {
            setError('Please enter a password that has six or more characters')
            return
        }
        setError(undefined)
        setStatus(Constants.AuthStatus.CallingAPI)

        try {
            if (props.auth === Constants.AuthType.LogIn) await logIn(email, password)
            else await signUp(email, password)
            setStatus(Constants.AuthStatus.AccountCreated)
        } catch (error) {
            console.log("Error logging in or signing up: " + error)
        }
    }

    if (status === Constants.AuthStatus.AccountCreated || status === Constants.AuthStatus.LoggedIn) {
        return <Navigate to={'/profile'} />
    }

    if (status === Constants.AuthStatus.CallingAPI) {
        return (
            <div>
                <LoadingIndicator text={'Loading'} />
            </div>
        )
    }

    return (
        <div>
            <div class='flex justify-center flex-wrap w-full'>
                <h1 class='text-gray-600 text-center text-3xl mt-20'>{header}</h1>
                <EmailAndPasswordInputView email={email} password={password} updateEmail={(event) => setEmail(event.target.value)} updatePassword={(event) => setPassword(event.target.value)} />
                {error !== undefined && <div class='w-full'><div class='m-auto text-center text-red-400 font-bold'>{error}</div></div>}
                <button class='bg-black text-white hover:bg-white hover:shadow-lg hover:text-black rounded-md p-2' onClick={authenticate}>{callToAction}</button>
            </div>
        </div>
    )

}

export default AuthenticationView