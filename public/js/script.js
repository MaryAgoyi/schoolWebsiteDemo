const toggleClose = document.querySelector('.close');
const toggleMenu = document.querySelector('.menu');
const navRight= document.querySelector('.nav-right');


toggleMenu.addEventListener('click', () =>{
    navRight.style.right='0';
    
    });
toggleClose.addEventListener('click', () =>{

navRight.style.right='-200px';
});

