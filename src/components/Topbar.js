import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enterOfficeId, enterOfficeName } from '../rootSlice';
import { toggleSelect } from '../js/selectOfficeToggler';
import { toggleProfileMenu, toggleNotifMenu } from '../js/profileMenuToggler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGlobe, faUser, faPowerOff, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {

    var office_name = useSelector(state => state.office_name);
    var office_id = useSelector(state => state.office_id);
    var offices = useSelector(state => state.offices);
    var me = useSelector(state => state.me);
    var dispatch = useDispatch();
    var navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate('/');
        }
    }, [office_id])

    const changeOffice = (id, office_name) => {
        toggleSelect('opts-div', 'opt-crd', 'offices-options' );
        dispatch(enterOfficeId(id));
        dispatch(enterOfficeName(office_name));
    }

    const logOut = () => {
        localStorage.clear();
        navigate('/');
    }

    return(

        <>

        <div className='topbar_container'>
            <p className='logged_user_fullname'>{me.first_name + ' ' + me.last_name}</p>
            <div id='outer' className='topbar_select_menu'>
                <div className='office_select_container' onClick={() => toggleSelect('opts-div', 'opt-crd', 'offices-options')}>
                    {office_name}
                    <FontAwesomeIcon className='select_arrow' id='opt-crd' icon={faCaretDown} />
                </div>
                <div id='opts-div' className='office_select_options_container' style={{opacity: 0}}>
                    <div id='offices-options' style={{display: 'none'}}>
                    {
                        offices.map((office) => (
                            <div onClick={() => changeOffice(office._id, office.office_name)} key={office._id} className='option'>{office.office_name}</div>
                        ))
                    }
                        <div onClick={() => changeOffice('id-hadzici', 'Hadžići')} className='option'>Hadžići</div>
                        <div onClick={() => changeOffice('id-vog', 'Vogošća')} className='option'>Vogošća</div>
                        <div onClick={() => changeOffice('id-c', 'Centar')} className='option'>Centar</div>
                        <div onClick={() => changeOffice('id-NGi', 'Novi Grad')} className='option'>Novi Grad</div>
                        <div onClick={() => changeOffice('id-NS', 'Novo Sarajevo')} className='option'>Novo Sarajevo</div>
                        <div onClick={() => changeOffice('id-I', 'Ilidža')} className='option'>Ilidža</div>
                        <div onClick={() => changeOffice('id-SG', 'Stari Grad')} className='option'>Stari Grad</div>
                        <div onClick={() => changeOffice('id-T', 'Trnovo')} className='option'>Trnovo</div>
                    </div>
                </div>
            </div>
            <FontAwesomeIcon icon={faGlobe} className='profile_icon' onClick={() => toggleNotifMenu()} />
            <FontAwesomeIcon icon={faUser} className='profile_icon' onClick={() => toggleProfileMenu()} />

            <div id='profile-menu' style={{opacity: 0}}>
                PROFIL
                <b>{me.first_name + ' ' + me.last_name}</b>
                <div className='pm_item_container'>
                    <div className='pm_item'>
                        <FontAwesomeIcon icon={faEdit} />
                        <a className='pm_link' href='uredi-profil'>Uredi profil</a>
                    </div>
                    <div className='pm_item'>
                        <FontAwesomeIcon icon={faPowerOff} />
                        <a className='pm_link' onClick={() => logOut()}>Odjava</a>
                    </div>
                </div>

            </div>
            
            <div id='notif-container' style={{opacity: 0}}>
                OBAVIJESTI
            </div>
        </div>

        </>
    )
}

export default Topbar;