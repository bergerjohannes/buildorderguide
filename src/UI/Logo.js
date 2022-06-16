import { Link } from 'react-router-dom'

const Logo = (props) => {
    return(
        <Link to='/'><div class='uppercase font-semibold tracking-wider text-sm py-1 px-3 m-4 flex z-50'><img class='w-5 h-5' src={require('../Images/Logo.png')} /><span class='pl-1'>Build Order Guide</span></div></Link>
    )
}

export default Logo