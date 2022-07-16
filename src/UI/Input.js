const Input = (props) => {
    return (
        <input class='block rounded-sm p-2 w-full outline-transparent bg-secondary-light text-main-dark placeholder-main-light' placeholder={props.placeholder} defaultValue={props.defaultValue} onChange={props.onChange} type={props.type} />
    )
}

export default Input