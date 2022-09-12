import Logo from './Logo'
import MenuItem from './MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useUserAuth } from '../Auth/Auth'

const Menu = (props) => {
    const { user } = useUserAuth()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    isMenuOpen ? disableBodyScroll(document) : enableBodyScroll(document)

    return (
        <div class='sticky top-0 flex justify-between z-30 bg-secondary-light'>
            <Logo/>
            <div class={isMenuOpen ? 'flex' : 'hidden lg:flex'}>
                <nav class='flex flex-col lg:flex-row justify-center lg:justify-end lg:space-x-4 space-y-6 lg:space-y-0 min-h-screen lg:min-h-fit fixed z-10 lg:relative items-center w-full lg:w-auto bg-secondary-light lg:bg-transparent left-0 top-0 m-0 lg:m-4 p-0'>
                    <MenuItem linkTo='/'>Builds</MenuItem>
                    <MenuItem linkTo='/uptime'>Uptime</MenuItem>
                    <MenuItem linkTo='/improve'>Improve</MenuItem>
                    <MenuItem linkTo='/challenge'>Challenge</MenuItem>
                    <MenuItem linkTo='/builder'>Builder</MenuItem>
                    <MenuItem linkTo='/about'>About</MenuItem>
                    {user !== null && <MenuItem linkTo='/profile'>Profile</MenuItem>}
                </nav>
            </div>
            <button class={isMenuOpen ? 'hidden' : 'block lg:hidden z-40 m-4'} onClick={() => setIsMenuOpen(!isMenuOpen)}><FontAwesomeIcon icon={faBars} /></button>
            <button class={!isMenuOpen ? 'hidden' : 'block lg:hidden fixed z-40 right-0 m-4'} onClick={() => setIsMenuOpen(!isMenuOpen)}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    )
}

export default Menu