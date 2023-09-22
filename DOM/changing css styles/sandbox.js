const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;') //This line overites the entire style attribute instead of adding a new 
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '99px';