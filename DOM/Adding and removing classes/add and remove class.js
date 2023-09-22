//const content = document.querySelector('p')
//console.log(content.classList);

let data = {
    userName: 'henry',
    password: 'amusah'
}
//console.log(data['userName'])

function userValidation(){
    let user = document.querySelector('.username')
    let pass = document.querySelector('.password')
 
    user.onblur = validateUserName;
    pass.onblur = validatePassword;
    
    function validateUserName(u){
     if(u.target.value !== data['userName']){
         user.classList.add('err');     
     } else{
         user.classList.remove('err');
     }
    }
    function validatePassword(p){
        if(p.target.value !== data.password){
            pass.classList.add('err');
        } else{
            pass.classList.remove('err');
        }
    }
}
 userValidation()
//user.onblur = validateUser;


/********************CODING CHALLENGE********************/
const query = document.querySelectorAll('p');
console.log(query)
query.forEach((p)=>{
    if(p.textContent.includes('error')){
        p.classList.add('err');
    } else if(p.textContent.includes('success')){
        p.classList.add('suc');
    }
    //console.log(p)
})