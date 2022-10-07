const A = (props) => {
    return(
        <a class='bg-accent-dark text-main-dark rounded-sm px-1 hover:bg-main-dark hover:text-secondary-light uppercase font-semibold tracking-wider' href={props.href}>{props.children}</a>
    )
}

export default A