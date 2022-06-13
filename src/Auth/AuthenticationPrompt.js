import Menu from '../UI/Menu'
import { Link } from 'react-router-dom'

const AuthenticationPrompt = (props) => {
    return (
        <div>
            <Menu />
            <div class='flex justify-center w-xl'>
                <div class='flex flex-col'>
                    <h1 class='text-gray-600 text-center text-3xl mt-20'>Authenticate to continue</h1>
                    <p class='text-center max-w-lg m-5'>Sign up or log in to use this service.</p>
                    <div class='flex justify-center mt-4 space-x-2'>
                        <Link to={{ pathname: '/log-in' }}><button class='bg-black text-white hover:bg-white hover:shadow-lg hover:text-black rounded-md p-2'>Log In</button></Link>
                        <Link to={{ pathname: '/sign-up' }}><button class='bg-black text-white hover:bg-white hover:shadow-lg hover:text-black rounded-md p-2'>Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthenticationPrompt