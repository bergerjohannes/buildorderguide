import { Link, useLocation } from 'react-router-dom'

const MenuItem = (props) => {
    const location = useLocation()

    return(
        <Link class='uppercase font-semibold tracking-wider text-lg md:text-sm' to={props.linkTo}><div class={location.pathname === props.linkTo ? 'md:bg-slate-100 md:py-1 md:px-3 hover:bg-orange-100 hover:text-orange-800 rounded-sm' : 'md:py-1 md:px-3 hover:bg-orange-100 hover:text-orange-800 rounded-sm'}>{props.children}</div></Link>
    )
}

export default MenuItem