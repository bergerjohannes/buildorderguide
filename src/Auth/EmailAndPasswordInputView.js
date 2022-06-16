import Input from '../UI/Input'

const EmailAndPasswordInputView = (props) => {
    return (
        <div class='w-full'>
            <div class='flex justify-center'>
                <Input placeholder='Email' value={props.email} onChange={props.updateEmail} />
            </div>
            <div class='flex justify-center'>
                <Input type='password' placeholder='Password' value={props.password} onChange={props.updatePassword} />
            </div>
        </div>
    )
}

export default EmailAndPasswordInputView