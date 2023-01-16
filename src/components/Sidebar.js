import React, { useEffect } from 'react';
import sidebar_logo from '../images/login_logo.png';
import { toggleSubmenu } from '../js/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCaretRight, faArrowsRotate, faLaptop, faCalendarDays, faCar, faHandshake, faBook, faUsers, faToolbox, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { enterActivePage, enterOpenedSubmenu, enterYScroll } from '../rootSlice';

const Sidebar = () => {

    const year = new Date().getFullYear();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    var active_page = useSelector(state => state.active_page);
    var yscroll = useSelector(state => state.yscroll);
    var os = useSelector(state => state.opened_submenu);

    console.log(active_page)

    useEffect(() => {
        document.querySelector(".sidebar_menu").scrollTop = yscroll || 0;
        document.querySelector("html").scrollTop =  0;
    }, [active_page])

    const nav = (page, link) => {

        dispatch(enterYScroll(document.querySelector(".sidebar_menu").scrollTop));
        dispatch(enterOpenedSubmenu(''));

        var submenus = document.getElementsByClassName('sidebar_submenu');
        for(var i = 0; i < submenus.length; i++) {
            submenus[i].style.maxHeight = '0px';
        }

        var arrows = document.getElementsByClassName('submenu_arrow');
        for(var i = 0; i < arrows.length; i++) {
            arrows[i].style.transform = 'rotate(0deg)';
        }

        dispatch(enterActivePage(page));
        navigate(link);
    }

    const toggleSm = (page, sm, arrow) => {
        dispatch(enterYScroll(document.querySelector(".sidebar_menu").scrollTop));
        toggleSubmenu(sm, arrow);
        dispatch(enterOpenedSubmenu(sm));
        dispatch(enterActivePage(page));
    }

    const go = (link) => {
        dispatch(enterYScroll(document.querySelector(".sidebar_menu").scrollTop));
        navigate(link);
    }

    return(
        <div className='sidebar_container'>
            <a href='/pocetna'>
                <img alt='Carwiz logo' className='sidebar_logo' src={sidebar_logo} />
            </a>
            <div className='sidebar_title'>
                NAVIGACIJA
            </div>
            <ul className='sidebar_menu'>
                <li className='sidebar_menu_item'>
                    <a id='m1' onClick={() => nav('pocetna', '/pocetna')} 
                        className={active_page === 'pocetna' ? 'sidebar_menu_link sidebar_menu_link sidebar_menu_link_border' : 'sidebar_menu_link'}
                    >
                        <div>
                            <FontAwesomeIcon className='sidebar_menu_icon' icon={faHome} />
                            <span>Početna</span>
                        </div>
                    </a>
                </li>
                <li className='sidebar_menu_item'>
                    <a id='m2' onClick={() => toggleSm('b2b', 'sm2', 'a2')} 
                        className={active_page === 'b2b' ? 'sidebar_menu_link sidebar_menu_link sidebar_menu_link_border' : 'sidebar_menu_link'}
                    >
                        <div>
                            <FontAwesomeIcon className='sidebar_menu_icon' icon={faArrowsRotate } />
                            <span>B2B</span>
                        </div>
                        <FontAwesomeIcon style={os === 'sm2' ? {transform: 'rotate(90deg)'} : {transform: 'rotate(0deg)'}} id='a2' className='submenu_arrow' icon={faCaretRight} />
                    </a>
                    <ul id='sm2' className='sidebar_submenu' style={os === 'sm2' ? {maxHeight: '300px'} : {maxHeight: '0px'}}>
                        <li className='sidebar_submenu_item'>
                            <a onClick={() => go('/odlazna-vozila')} className='sidebar_submenu_link'>
                                ODLAZNI
                            </a>
                        </li>
                        <li className='sidebar_submenu_item'>
                            <a onClick={() => go('/dolazna-vozila')} className='sidebar_submenu_link'>
                                DOLAZNI
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='sidebar_menu_item'>
                    <a id='m3' onClick={() => nav('c2b', '/c2b')} 
                        className={active_page === 'c2b' ? 'sidebar_menu_link sidebar_menu_link sidebar_menu_link_border' : 'sidebar_menu_link'}
                    >
                        <div>
                           <FontAwesomeIcon className='sidebar_menu_icon' icon={faLaptop} />
                            <span>C2B</span> 
                        </div>
                    </a>
                </li>
                <li className='sidebar_menu_item'>
                    <a id='m4' onClick={() => nav('rezervacije', '/rezervacije')} 
                        className={active_page === 'rezervacije' ? 'sidebar_menu_link sidebar_menu_link sidebar_menu_link_border' : 'sidebar_menu_link'}
                    >
                        <div>
                            <FontAwesomeIcon className='sidebar_menu_icon' icon={faCalendarDays} />
                            <span>Rezervacije</span>
                        </div>
                    </a>
                </li>
                <li className='sidebar_menu_item'>
                    <a id='m5' onClick={() => toggleSm('ugovori', 'sm5', 'a5')} 
                        className={active_page === 'ugovori' ? 'sidebar_menu_link sidebar_menu_link sidebar_menu_link_border' : 'sidebar_menu_link'}
                    >
                        <div>
                            <FontAwesomeIcon className='sidebar_menu_icon' icon={faMoneyBill} />
                            <span>Ugovori/Računi</span>
                        </div>
                        <FontAwesomeIcon style={os === 'sm5' ? {transform: 'rotate(90deg)'} : {transform: 'rotate(0deg)'}} id='a5' className='submenu_arrow' icon={faCaretRight} />
                    </a>
                    <ul id='sm5' className='sidebar_submenu' style={os === 'sm5' ? {maxHeight: '300px'} : {maxHeight: '0px'}}>
                        <li className='sidebar_submenu_item'>
                            <a onClick={() => go('/ugovori')} className='sidebar_submenu_link'>
                                Pregled ugovora
                            </a>
                        </li>
                        <li className='sidebar_submenu_item'>
                            <a  onClick={() => go('/racuni')} className='sidebar_submenu_link'>
                                Računi
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='sidebar_menu_item'>
                    <a id='m6' onClick={() => nav('vozila', '/vozila')}
                        className={active_page === 'vozila' ? 'sidebar_menu_link sidebar_menu_link sidebar_menu_link_border' : 'sidebar_menu_link'}
                    >
                        <div>
                            <FontAwesomeIcon className='sidebar_menu_icon' icon={faCar} />
                            <span>Vozila</span>
                        </div>
                    </a>
                </li>
                <li className='sidebar_menu_item'>
                    <a id='m7' onClick={() => toggleSm('klijenti', 'sm7', 'a7')} 
                        className={active_page === 'klijenti' ? 'sidebar_menu_link sidebar_menu_link sidebar_menu_link_border' : 'sidebar_menu_link'}
                    >
                        <div>
                            <FontAwesomeIcon className='sidebar_menu_icon' icon={faHandshake} />
                            <span>Klijenti</span>
                        </div>
                        <FontAwesomeIcon style={os === 'sm7' ? {transform: 'rotate(90deg)'} : {transform: 'rotate(0deg)'}} id='a7' className='submenu_arrow' icon={faCaretRight} />
                    </a>
                    <ul id='sm7' className='sidebar_submenu' style={os === 'sm7' ? {maxHeight: '300px'} : {maxHeight: '0px'}}>
                        <li className='sidebar_submenu_item'>
                            <a  onClick={() => go('/klijenti')} className='sidebar_submenu_link'>
                                Svi klijenti
                            </a>
                        </li>
                        <li className='sidebar_submenu_item'>
                            <a onClick={() => go('/crna-lista')} className='sidebar_submenu_link'>
                                Crna lista
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='sidebar_menu_item'>
                    <a id='m8' onClick={() => toggleSm('izvjestaji', 'sm8', 'a8')} 
                        className={active_page === 'izvjestaji' ? 'sidebar_menu_link sidebar_menu_link sidebar_menu_link_border' : 'sidebar_menu_link'}
                    >
                        <div>
                            <FontAwesomeIcon className='sidebar_menu_icon' icon={faBook} />
                            <span>Izvještaji</span>
                        </div>
                        <FontAwesomeIcon style={os === 'sm8' ? {transform: 'rotate(90deg)'} : {transform: 'rotate(0deg)'}} id='a8' className='submenu_arrow' icon={faCaretRight} />
                    </a>
                    <ul id='sm8' className='sidebar_submenu' style={os === 'sm8' ? {maxHeight: '300px'} : {maxHeight: '0px'}}>
                        <li className='sidebar_submenu_item'>
                            <a  onClick={() => go('/izvjestaj-po-vozilu')} className='sidebar_submenu_link'>
                                Po vozilu
                            </a>
                        </li>
                        <li className='sidebar_submenu_item'>
                            <a  onClick={() => go('/izvjestaj-po-klijentu')} className='sidebar_submenu_link'>
                                Po klijentu
                            </a>
                        </li>
                        <li className='sidebar_submenu_item'>
                            <a  onClick={() => go('/izvjestaj-sva-vozila')} className='sidebar_submenu_link'>
                                Sva vozila
                            </a>
                        </li>
                        <li className='sidebar_submenu_item'>
                            <a  onClick={() => go('/top-klijenti')} className='sidebar_submenu_link'>
                                Top klijenti
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='sidebar_menu_item'>
                    <a id='m9' onClick={() => nav('korisnici', '/korisnici')} 
                        className={active_page === 'korisnici' ? 'sidebar_menu_link sidebar_menu_link sidebar_menu_link_border' : 'sidebar_menu_link'}
                    >
                        <div>
                            <FontAwesomeIcon className='sidebar_menu_icon' icon={faUsers} />
                            <span>Korisnici</span>
                        </div>
                    </a>
                </li>
                <li className='sidebar_menu_item'>
                    <a id='m10' onClick={() => nav('postavke', '/postavke')} 
                        className={active_page === 'postavke' ? 'sidebar_menu_link sidebar_menu_link sidebar_menu_link_border' : 'sidebar_menu_link'}
                    >
                        <div>
                            <FontAwesomeIcon className='sidebar_menu_icon' icon={faToolbox} />
                            <span>Postavke</span>
                        </div>
                    </a>
                </li>
            </ul>

            <div className='credentials'>
                Copyright © {year} <a className='cred' href='https://id-s.ba/'>ID Solutions</a>. Sva prava zadržana
            </div>
        </div>
    )
}

export default Sidebar;