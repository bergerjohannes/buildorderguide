import Centered from '../UI/Centered'
import Input from '../UI/Input'

const EmailAndPasswordInputView = (props) => {
    return (
        <div class='w-full space-y-4'>
            <Centered>
                <Input placeholder='Email' value={props.email} onChange={props.updateEmail} />
            </Centered>
            <Centered>
                <Input type='password' placeholder='Password' value={props.password} onChange={props.updatePassword} />
            </Centered>
        </div>
    )
}

export default EmailAndPasswordInputView