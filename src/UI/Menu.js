import Logo from './Logo'
import MenuItem from './MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const Menu = (props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    isMenuOpen ? disableBodyScroll(document) : enableBodyScroll(document)

    return (
        <div class='sticky top-0 flex justify-between z-30 bg-secondary-light'>
            <Logo/>
            <div class={isMenuOpen ? 'flex' : 'hidden md:flex'}>
                <nav class='flex flex-col md:flex-row justify-center md:justify-end md:space-x-4 space-y-6 md:space-y-0 min-h-screen md:min-h-fit fixed z-10 md:relative items-center w-full md:w-auto bg-secondary-light md:bg-transparent left-0 top-0 m-0 md:m-4 p-0'>
                    <MenuItem linkTo='/'>Builds</MenuItem>
                    <MenuItem linkTo='/uptime'>Uptime</MenuItem>
                    <MenuItem linkTo='/stats'>Stats</MenuItem>
                    <MenuItem linkTo='/challenge'>Challenge</MenuItem>
                    <MenuItem linkTo='/builder'>Builder</MenuItem>
                    <MenuItem linkTo='/profile'>Profile</MenuItem>
                </nav>
            </div>
            <button class={isMenuOpen ? 'hidden' : 'block md:hidden z-40 m-4'} onClick={() => setIsMenuOpen(!isMenuOpen)}><FontAwesomeIcon icon={faBars} /></button>
            <button class={!isMenuOpen ? 'hidden' : 'block md:hidden fixed z-40 right-0 m-4'} onClick={() => setIsMenuOpen(!isMenuOpen)}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    )
}

export default Menu