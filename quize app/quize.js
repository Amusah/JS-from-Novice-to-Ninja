const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const message = document.querySelector('.message');
let submit_btn = document.querySelector('.submit_btn');
let start_btn = document.querySelector('.start_btn');

start_btn.classList.add('d-none');
form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) =>{
        //console.log(answer, index)
        if(answer === ''){
            //form.onsubmit = false;
            alert('answer all questions');
        }
        else if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    /********Show results*******/
    //console.log(score);
    scrollTo(0,0);
    message.classList.remove('d-none');
    setTimeout(()=>{
        message.classList.add('d-none');
    }, 2000);

    setTimeout(()=>{
        result.classList.remove('d-none');
    }, 2000);
    

    //Animating results
        let output = 0;
        const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
            start_btn.classList.remove('d-none');
        } else{
            output++
        }
    }, 100);

    submit_btn.classList.add('d-none');
    
});
start_btn.addEventListener('click', ()=>{
    location.reload();
});


/****************************WINDOW OBJECT*******************************/
// console.log('Hi');
// window.console.log('Heya');

// setTimeout(() => {
//     alert('asert')
// },9000);

// let i = 0;
// const timer = setInterval(()=>{
//     console.log('Hi');
//     i++
//     if(i === 5){
//         clearInterval(timer);
//         alert('timer terminated');
//     }
// }, 1000);