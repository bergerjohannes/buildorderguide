const Button = (props) => {
    return(
        <button disabled={props.disabled} class='disabled:opacity-50 disabled:hover:bg-primary-light bg-primary-light disabled:hover:text-primary-dark text-primary-dark py-1 px-4 rounded-sm my-4 hover:bg-primary-dark hover:text-white uppercase font-semibold tracking-wider text-md w-fit m-auto' onClick={props.onClick}>{props.children}</button>
    )
}

export default Button