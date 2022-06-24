import Menu from '../UI/Menu'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'
import Heading1 from '../UI/Heading1'
import ParagraphCentered from '../UI/ParagraphCentered'
import Centered from '../UI/Centered'

const AuthenticationPrompt = (props) => {
    return (
        <div>
            <Menu />
            <Centered>
                <div class='flex flex-col'>
                    <Heading1>Authenticate to continue</Heading1>
                    <ParagraphCentered>Sign up or log in to use this service.</ParagraphCentered>
                    <div class='flex justify-center mt-4 space-x-2'>
                        <Link to={{ pathname: '/log-in' }}><Button>Log In</Button></Link>
                        <Link to={{ pathname: '/sign-up' }}><Button>Sign Up</Button></Link>
                    </div>
                </div>
            </Centered>
        </div>
    )
}

export default AuthenticationPrompt