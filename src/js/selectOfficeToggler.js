import { closeProfileMenu, closeNotifMenu } from "./profileMenuToggler";

export const toggleSelect = (div, arrow, opts) => {
    if(document.getElementById(div).style.opacity != 1) {
        closeProfileMenu();
        closeNotifMenu();
        document.getElementById(div).style.opacity = 1;
        document.getElementById(div).style.zIndex = 100;
        document.getElementById('outer').style.zIndex = 0;
        document.getElementById(arrow).style.transform = 'rotate(180deg)';
        document.getElementById(opts).style.display = 'block';
    } else {
        document.getElementById(div).style.opacity = 0;
        document.getElementById(div).style.zIndex = 0;
        document.getElementById('outer').style.zIndex = 100;
        document.getElementById(arrow).style.transform = 'rotate(0deg)';
        document.getElementById(opts).style.display = 'none';
    }
}

export const closeSelect = (div, arrow, opts) => {
    document.getElementById(div).style.opacity = 0;
    document.getElementById(div).style.zIndex = 0;
    document.getElementById('outer').style.zIndex = 100;
    document.getElementById(arrow).style.transform = 'rotate(0deg)';
    document.getElementById(opts).style.display = 'none';
}