import React from 'react'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom'

const Sidebar = ({ collapsed, rtl, toggled, handleToggleSidebar }) => {

    return (
        <div class='fixed h-full top-0 w-1/12 overflow-hidden'>
            <ProSidebar
                image={false}
                rtl={rtl}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint='md'
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div class='p-6 font-bold text-md uppercase tracking-widest	'>
                        <span>Menu</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu>
                        <MenuItem><Link to='/'>Builds</Link></MenuItem>
                        <MenuItem><Link to='/uptime'>Uptime</Link></MenuItem>
                        <MenuItem><Link to='/stats'>Stats</Link></MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem><Link to='/profile'>Profile</Link></MenuItem>
                    </Menu>
                </SidebarContent>

                <SidebarFooter>
                    <div class='p-4'>
                        <Link to='/'>About</Link>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

export default Sidebar