const ul = document.querySelector('.people');

const people = ['Henry', 'Amusah', 'Fredrick', 'Morgan'];

let html = ``

people.forEach(person =>{
    html += `<li style = "color: purple">${person}</li>`
});
console.log(html);
ul.innerHTML = html;