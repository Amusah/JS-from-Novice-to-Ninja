/*******************GETTING AND SETTING ITEMS*******************/

// store data from local storage
localStorage.setItem('name', 'Henry');
localStorage.setItem('age', 25);


// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);



// update data in local storage
localStorage.setItem('name', 'Amusah');
            // OR
localStorage.age = 99;
name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);