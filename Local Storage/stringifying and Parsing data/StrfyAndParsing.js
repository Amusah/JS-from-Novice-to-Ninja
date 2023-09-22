const todos = [
    {text: 'Pray', Auther: 'Henry'},
    {text: 'Code', Authur: 'NerdyDev'},
    {text: 'Go swimming', Auther: 'Yeboah'}
]

//console.log(JSON.stringify(todos));
// converting array elements into json format and storing in local storage
localStorage.setItem('todos', JSON.stringify(todos));

let storedData = localStorage.getItem('todos');
console.log(storedData);

// converting json back to array using JSON.parse() method;
console.log('converting json back to array using JSON.parse() method');
console.log(JSON.parse(storedData));
