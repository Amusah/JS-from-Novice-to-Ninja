let button = document.querySelector('button');
let popup = document.querySelector('.popup-wrapper');
let close = document.querySelector('.popup-close');

button.addEventListener('click', ()=>{
    popup.style.display = 'block'
});

close.addEventListener('click', function(){
    popup.style.display = 'none'
});
