const Button = (props) => {
    return(
        <button disabled={props.disabled} class='disabled:opacity-50 disabled:hover:bg-accent-dark bg-accent-dark disabled:hover:text-main-dark text-main-dark py-1 px-4 rounded-sm my-4 hover:bg-main-dark hover:text-secondary-light uppercase font-semibold tracking-wider text-md w-fit m-auto' onClick={props.onClick}>{props.children}</button>
    )
}

export default Button