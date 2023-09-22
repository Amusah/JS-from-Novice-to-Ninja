const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://thenetninja.co.uk');
console.log(link.getAttribute('href'));

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));


// Trying a simple Form validation using the setAttribute
let password = 'abcd';
const form = document.querySelector('.form');
const errMsg = document.querySelector('span');
console.log(errMsg);
let validatePassword = (e)=>{
    //console.log(e.target.value); 
    if(e.target.value !== password && e.target.value !== ''){
        form.setAttribute('class', 'err');
        errMsg.innerHTML = 'incorrect password';
    } else{
        form.setAttribute('class', 'form');
        errMsg.innerHTML = ''
    }
}
form.onblur = validatePassword;
//form.setAttribute('class', 'err')