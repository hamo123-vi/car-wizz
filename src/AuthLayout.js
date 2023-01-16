import React from 'react';
import loginLogo from './images/login_logo.png';

const AuthLayout =({children}) => {
    return(
        <div className='auth_layout_container'>
            <div className='overlay'></div>
            <div className='auth_wrapper'>
                <a href=''>
                    <img alt='Carwiz logo' src={ loginLogo } />
                </a>
                <div className='auth_form_container'>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;