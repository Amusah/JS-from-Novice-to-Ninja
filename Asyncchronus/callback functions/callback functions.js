/******************************CALL BACK FUNCTIONS IN HTTP REQUESTS********************************/
const getTodos = (callback)=>{
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        //console.log(request, request.readyState);
        //request.readyState === 4 && request.status === 200 ? console.log(request, request.responseText) : console.log('response not ready');
        //console.log(request.status);
        if(request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText)
        }else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}
getTodos((err, data)=>{
    console.log('callback is fired');
    //console.log(err, data);
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});


