const form = document.querySelector('.signup-form');
//const userName = document.getElementById('username');

form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(form.username.value);
});

// TESTING REGEX PATTERNS
const user = 'jhenryu';
const pattern = /^[a-z]{6,}$/;


let result = pattern.test(user);
console.log(result);

if(result){
    console.log('passed the regular expression test :)');
} else{
    console.log('failed the regular expression test :(');
}


// let result = user.search(pattern);
// console.log(result);