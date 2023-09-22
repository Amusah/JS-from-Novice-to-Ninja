/*****************************CALL BACK HELL*******************************/
const getTodos = (resource, callback)=>{
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        //console.log(request, request.readyState);
        //request.readyState === 4 && request.status === 200 ? console.log(request, request.responseText) : console.log('response not ready');
        //console.log(request.status);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        }else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
}
getTodos('todos/henry.json', (err, data)=>{
    console.log('first callback is fired');
    console.log(data);
    getTodos('todos/nana.json', (err, data)=>{
        console.log('second callback is fired', data);
        getTodos('todos/yeboah.json', (err, data)=>{
            console.log('third callback is fired', data);
        });
    });
});


// We calling getTodos() as callbacks and its getting messy already...hence this is what we call call back hell