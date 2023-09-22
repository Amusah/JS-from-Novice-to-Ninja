const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback');
const userNameRegexPattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e =>{
    //Validation
    e.preventDefault();
    const userName = form.username.value;

    if(userName === ''){
        feedback.textContent = 'the user name field is required';
    } else if(userNameRegexPattern.test(userName)){
        // Good Feedback
        feedback.textContent = 'The username is valid';
    } else{
        // Wrong feedback
        feedback.textContent = 'Username must contain only letters and must be between 6 - 12 characters long';
    }
});

// LIFE FEEDBACK EVENT LISTENER
form.username.addEventListener('keyup', e =>{
    //console.log(e.target.value, form.username.value);
    if(userNameRegexPattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else{
        //form.username.style.border = '1px solid crimson';
        form.username.setAttribute('class', 'error');
    }
});