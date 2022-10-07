const CenteredButton = (props) => {
    return(
        <div class='flex justify-center'><button class='bg-accent-dark text-main-dark py-1 px-4 rounded-sm my-4 hover:bg-main-dark hover:text-secondary-light uppercase font-semibold tracking-wider text-md w-fit m-auto' onClick={props.onClick}>{props.children}</button></div>
    )
}

export default CenteredButton