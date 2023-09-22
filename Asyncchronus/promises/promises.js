/*****************************PROMISES*******************************/
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
    console.log('Promise resolved:', data);
}).catch(err =>{
    console.log('Promise rejected:', err);
});
// const getSomething = ()=>{
//     return new Promise((resolve, reject)=>{
//         // some data
//         //resolve('some data');
//         reject('some error');
//     });
// }
// getSomething().then((data)=>{
//     console.log(data);
// }, (err)=>{
//     console.log(err)
// });

// Another means
// getSomething().then(data =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err)
// });

