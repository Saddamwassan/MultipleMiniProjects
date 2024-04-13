const navbar = document.querySelector('.nav');

window.onscroll= function(){
    stickyNavbar();
}
function stickyNavbar(){
    if(navbar.offsetTop<window.scrollY){
        navbar.classList.add('stickynav');
    }else{
        navbar.classList.remove('stickynav');
    }
}