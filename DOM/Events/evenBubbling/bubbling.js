// EVENTS BUBBLING AND EVENT DELEGATION
let todoItems = document.querySelector('ul');

let button = document.querySelector('button');
button.addEventListener('click', ()=>{
    let li = document.createElement('li');
    li.textContent = prompt('Enter a Todo item');     // *
    if(li.textContent === ''){                         // * FINE TUNING 
        alert('Please Enter a valid todo element');   //  *
    } else{
        todoItems.prepend(li);    
    }
      
});

todoItems.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});