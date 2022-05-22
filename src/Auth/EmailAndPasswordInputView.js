const EmailAndPasswordInputView = (props) => {
    return (
        <div class='w-full'>
            <div class='flex justify-center'>
                <input class='w-full max-w-xl text-center md:text-left text-xl mt-20 m-5 p-2 rounded-md bg-gray-50 shadow-inner' placeholder='Email' value={props.email} onChange={props.updateEmail} />
            </div>
            <div class='flex justify-center'>
                <input class='w-full max-w-xl text-center md:text-left text-xl m-5 p-2 rounded-md bg-gray-50 shadow-inner' placeholder='Password' value={props.password} onChange={props.updatePassword} type='password' autocomplete='off'/>
            </div>
        </div>
    )
}

export default EmailAndPasswordInputView