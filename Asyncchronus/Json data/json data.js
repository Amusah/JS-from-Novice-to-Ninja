/******************************JSON DATA********************************/
const getTodos = (callback)=>{
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

    request.open('GET', 'todos.json');
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


// in this lesson, we created a JSON file with some randome data in it and made an XMLHttpRequest() on it