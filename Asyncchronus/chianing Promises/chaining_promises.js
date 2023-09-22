const getTodos = (resource)=>{
    return new Promise((resolve, reject)=>{
        let request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
            //console.log(request, request.readyState);
            //request.readyState === 4 && request.status === 200 ? console.log(request, request.responseText) : console.log('response not ready');
            //console.log(request.status);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            }else if(request.readyState === 4){
                reject('Error');
            }
        });
    
        request.open('GET', resource);
        request.send();
    });

}
getTodos('todos/henry.json').then(data => {
    console.log('Promise 1 resolved:', data);
    return getTodos('todos/nana.json');
}).then(data => {
    console.log('Promise 2 resolved:', data);
    return getTodos('todos/yeboah.json');
}).then(data =>{
    console.log('Promise 3 resolved:', data);
}).catch(err =>{
    console.log('Promise rejected:', err);
});