const Button = (props) => {
    return(
        <button class='bg-primary-light text-primary-dark py-1 px-4 rounded-sm m-2 hover:bg-primary-dark hover:text-white uppercase font-semibold tracking-wider text-lg' onClick={props.onClick}>{props.children}</button>
    )
}

export default Button