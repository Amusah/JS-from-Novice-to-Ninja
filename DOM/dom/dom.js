console.log(document.URL)

/******query selectors******/
let query = document.querySelector('p');
console.log(query.innerText);

// query.innerText = 'This is awesome'
// console.log(query);

let allPs = document.querySelectorAll('p')
console.log(allPs)
allPs.forEach(p =>{
    console.log(p);
    p.innerText += ' + an appended text';
    console.log(p)
})