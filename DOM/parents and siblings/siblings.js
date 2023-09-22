const parent = document.querySelector('article');
console.log(parent);
//retrieving all child elements of article tag
console.log(parent.children);

let nodeList = parent.children;
Array.from(nodeList).forEach((child) => {
    child.classList.add('child-element');
    console.log(child)
});

title = document.querySelector('h2');
console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling)
console.log(title.previousElementSibling)

//CHAINING
console.log('//CHAINING');
console.log(title.nextElementSibling.parentElement.children)