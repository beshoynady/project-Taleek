const nav =document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.scrollY > 5){
        nav.classList.add('stiky')}
    else{
        nav.classList.remove('stiky')}
    }
);