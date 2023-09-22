/***************    COPY EVENT   ****************/
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', ()=>{
    console.log('Document copied')
});

/***************  MOUSE MOVE EVENT  ***************/
const box = document.querySelector('.box');
box.addEventListener('mousemove', e =>{
    //console.log(e);
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

/*******************   WHEEL EVENT  *********************/
document.addEventListener('wheel', e =>{
    console.log(e);
})