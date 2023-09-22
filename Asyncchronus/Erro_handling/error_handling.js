/*************************ERROR HANDLING****************************/
const getTodos = async ()=>{
    const response = await fetch('todos/henry.json');
    if(response.status !== 200){
        throw new Error('cannot fetch data');
    }
    //console.log(response);
    const data = await response.json();
    return data;
}
getTodos().then(data => console.log('resolved:', data))
.catch(err => console.log('rejected;', err.message));
