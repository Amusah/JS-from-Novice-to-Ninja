const lists = document.querySelector('.todos');
const formInput = document.querySelector('.input_field');
const searchForm = document.querySelector('.search_field input');
const timeStamp = document.getElementById('timeStamp');
const date = new Date();
// listItems = Array.from(lists.children);
// for(var i of listItems){
//     //console.log(i)
// }

timeStamp.textContent = date.toDateString();

formInput.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = formInput.add.value.trim();
    //console.log(todo);
    if(todo.length){
        generatetemplate(todo);
        formInput.reset();
    }
});

const generatetemplate = (todo)=>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <div>
    <i class="far fa-trash-alt delete"></i>
    <i class="fas fa-pencil-alt edit"></i>
    </div>
  </li>`

    lists.innerHTML += html;
}

/*
WHIT THESE BLOCK OF CODES, the idea behind it was querying the DOM and attaching eventListeners to all the li and the delete icon
but then this affects the performance when there are a lot of todo lists because javascript has to attach eventlisteners to each of them
and also we have to manually attach eventListener when we add a new list item.

so to fix this problem, we have to use event delegation of which we will attach it to the whole ul tag
*/

//deleting todos
lists.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        //alert('trash clicked');
        e.target.parentElement.parentElement.remove();
    }else if(e.target.classList.contains('edit')){
        //console.log('edit icon clicked');
        formInput.add.value = e.target.parentElement.parentElement.textContent.trim();  
    }
});

//Searching todos
const filterTodos = (searchPrase)=>{
    Array.from(lists.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(searchPrase))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(lists.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(searchPrase))
        .forEach((todo) => todo.classList.remove('filtered'));
};

searchForm.addEventListener('keyup', e =>{
    //console.log(searchForm.value);
    const searchPrase = searchForm.value.trim().toLowerCase();
    filterTodos(searchPrase);
});
