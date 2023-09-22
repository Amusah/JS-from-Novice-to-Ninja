// JAVASCRIPT EVENTS
let todoItems = document.querySelector('ul');

let button = document.querySelector('button');
button.addEventListener('click', ()=>{
    //console.log('you clicked me')
    // todoItems.innerHTML += '<li>new todo</li>'
    let li = document.createElement('li');
    li.textContent = 'Something new';
    //todoItems.append(li);     Adds from the buttom
    todoItems.prepend(li);      //Adds from the top
});


Array.from(todoItems.children).forEach(todo =>{
    todo.addEventListener('click', (e)=>{
       //e.target.style.textDecoration = 'line-through';
       e.target.remove();
    })
})