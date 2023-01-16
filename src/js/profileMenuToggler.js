import { closeSelect } from "./selectOfficeToggler";

export const toggleProfileMenu = () => {
    if(document.getElementById('profile-menu').style.opacity != 1) {
        closeSelect('opts-div', 'opt-crd', 'offices-options');
        closeNotifMenu();
        document.getElementById('profile-menu').style.opacity = 1;
        document.getElementById('profile-menu').style.display = 'flex';
        document.getElementById('notif-container').style.display = 'none';
        document.getElementById('profile-menu').style.zIndex = 100;
        document.getElementById('outer').style.zIndex = 0;
    } else {
        document.getElementById('profile-menu').style.opacity = 0;
        document.getElementById('profile-menu').style.zIndex = 0;
        document.getElementById('outer').style.zIndex = 100;
    }
}

export const toggleNotifMenu = () => {
    if(document.getElementById('notif-container').style.opacity != 1) {
        closeSelect('opts-div', 'opt-crd', 'offices-options');
        closeProfileMenu();
        document.getElementById('notif-container').style.opacity = 1;
        document.getElementById('notif-container').style.display = 'flex';
        document.getElementById('notif-container').style.zIndex = 100;
        document.getElementById('outer').style.zIndex = 0;
    } else {
        document.getElementById('notif-container').style.opacity = 0;
        document.getElementById('notif-container').style.zIndex = 0;
        document.getElementById('outer').style.zIndex = 100;
    }
}

export const closeProfileMenu = () => {
    document.getElementById('profile-menu').style.opacity = 0;
    document.getElementById('profile-menu').style.zIndex = 0;
    document.getElementById('outer').style.zIndex = 100;
    document.getElementById('profile-menu').style.display = 'none';
}

export const closeNotifMenu = () => {
    document.getElementById('notif-container').style.opacity = 0;
    document.getElementById('notif-container').style.zIndex = 0;
    document.getElementById('outer').style.zIndex = 100;
    document.getElementById('notif-container').style.display = 'none';
}