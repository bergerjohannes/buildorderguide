const Button = (props) => {
    return(
        <button class='bg-primary-light text-primary-dark py-1 px-4 rounded-sm my-4 hover:bg-primary-dark hover:text-white uppercase font-semibold tracking-wider text-md w-fit m-auto' onClick={props.onClick}>{props.children}</button>
    )
}

export default Button