import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

const Layout = ({children}) => {
    return(
        <div className='main_layout_container'>
            <Sidebar />
            <div className='content_container'>
                <Topbar />
                <div className='main'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;