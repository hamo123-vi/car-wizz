export const toggleSubmenu = (submenu, arrow) => {
    if(document.getElementById(submenu).style.maxHeight === '0px') {

        var submenus = document.getElementsByClassName('sidebar_submenu');
        for(var i = 0; i < submenus.length; i++) {
            submenus[i].style.maxHeight = '0px';
        }

        var arrows = document.getElementsByClassName('submenu_arrow');
        for(var i = 0; i < arrows.length; i++) {
            arrows[i].style.transform = 'rotate(0deg)';
        }

        document.getElementById(submenu).style.maxHeight = '300px';
        document.getElementById(arrow).style.transform = 'rotate(90deg)';

    } else {
        document.getElementById(submenu).style.maxHeight = '0px';
        document.getElementById(arrow).style.transform = 'rotate(0deg)';
    }

}