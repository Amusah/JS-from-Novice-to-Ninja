/**************************FETCH API****************************/
fetch('todos/henry.json').then(response =>{
    console.log('promisw resolved successfully:', response);
    return response.json();
}).then(data => console.log(data)).catch(err=> {
    console.log('promise rejected', err);
});