import { Link, useLocation } from 'react-router-dom'

const MenuItem = (props) => {
    const location = useLocation()

    return(
        <Link class='uppercase font-semibold tracking-wider text-lg md:text-sm' to={props.linkTo}><div class={location.pathname === props.linkTo ? 'md:bg-secondary-dark md:py-1 md:px-3 p-4 hover:bg-accent-dark hover:text-main-dark rounded-sm' : 'md:py-1 md:px-3 p-4 hover:bg-accent-dark hover:text-main-dark rounded-sm'}>{props.children}</div></Link>
    )
}

export default MenuItem