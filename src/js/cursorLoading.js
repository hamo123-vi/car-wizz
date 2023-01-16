export const cursorLoaderOn = () => {
    var html = document.querySelectorAll('body');
    for(var i = 0; i < html.length; i++) {
        html[i].style.cursor = 'progress';
    }
}

export const cursorLoaderOff = () => {
    var html = document.querySelectorAll('body');
    for(var i = 0; i < html.length; i++) {
        html[i].style.cursor = 'auto';
    }
}