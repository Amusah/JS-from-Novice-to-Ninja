/**************************ASYNC AWAIT****************************/
const getTodos = async ()=>{
    const response = await fetch('todos/henry.json');
    //console.log(response);
    const data = await response.json();
    return data;
}
getTodos().then(data => console.log('resolved:', data))
