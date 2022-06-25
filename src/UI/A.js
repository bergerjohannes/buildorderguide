const A = (props) => {
    return(
        <a class='bg-primary-light text-primary-dark rounded-sm px-1 hover:bg-primary-dark hover:text-white uppercase font-semibold tracking-wider' href={props.href}>{props.children}</a>
    )
}

export default A