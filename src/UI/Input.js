const Input = (props) => {
    return(
        <input class='block rounded-md p-2 mx-auto w-11/12 md:w-9/12 max-w-sm my-4 outline-transparent bg-secondary-light text-main-dark placeholder-main-light' placeholder={props.placeholder} value={props.value} onChange={props.onChange} type={props.type}/>
    )
}

export default Input