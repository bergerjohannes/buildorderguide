import { Link, useLocation } from 'react-router-dom'

const MenuItem = (props) => {
    const location = useLocation()

    return(
        <Link class='uppercase font-semibold tracking-wider text-lg md:text-sm' to={props.linkTo}><div class={location.pathname === props.linkTo ? 'md:bg-secondary-light md:py-1 md:px-3 hover:bg-primary-light hover:text-main-dark rounded-sm' : 'md:py-1 md:px-3 hover:bg-primary-light hover:text-primary-dark rounded-sm'}>{props.children}</div></Link>
    )
}

export default MenuItem