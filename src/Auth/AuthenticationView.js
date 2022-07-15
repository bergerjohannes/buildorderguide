
import React, { useState } from 'react'
import * as Constants from '../Constants'
import { Navigate } from 'react-router-dom'
import LoadingIndicator from '../UI/LoadingIndicator'
import EmailAndPasswordInputView from './EmailAndPasswordInputView'
import { useUserAuth } from './Auth'
import Button from '../UI/Button'
import Heading1 from '../UI/Heading1'
import Menu from '../UI/Menu'

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
                <Menu />
                <LoadingIndicator text={'Loading'} />
            </div>
        )
    }

    return (
        <div>
            <Menu />
            <div class='flex justify-center flex-wrap w-full'>
                <Heading1>{header}</Heading1>
                <EmailAndPasswordInputView email={email} password={password} updateEmail={(event) => setEmail(event.target.value)} updatePassword={(event) => setPassword(event.target.value)} />
                {error !== undefined && <div class='w-full'><div class='m-auto text-center text-red-400 font-bold'>{error}</div></div>}
                <Button onClick={authenticate}>{callToAction}</Button>
            </div>
        </div>
    )

}

export default AuthenticationView