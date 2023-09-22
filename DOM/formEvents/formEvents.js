const form = document.querySelector('.signup-form');
//const userName = document.getElementById('username');

form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(form.username.value);
});