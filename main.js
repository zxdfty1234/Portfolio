'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

// click scroll
const navtarget = document.querySelector('.navbar__menu');
navtarget.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    // console.log(event.target.dataset.link);
    scrollMove(link);
});

// click contact me
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', (event)=>{
    scrollMove('#contact');
});

// transparent home
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity= 1-window.scrollY/homeHeight
    
})





function scrollMove(selection){
    const scrollTo = document.querySelector(selection);
    const top = scrollTo.offsetTop - navbarHeight < 0 ? 0 : scrollTo.offsetTop - navbarHeight;
    const left = scrollTo.offsetLeft;
    window.scrollTo({top:top, left:left, behavior:'smooth'});
}

