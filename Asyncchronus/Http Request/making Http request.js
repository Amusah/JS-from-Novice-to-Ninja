const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=>{
    //console.log(request, request.readyState);
    request.readyState === 4 ? console.log(request.responseText) : console.log('response not ready');
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
