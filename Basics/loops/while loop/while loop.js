// While loop

// i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

const names = ['Henry', 'Amusah', 'Mario', 'Luigi'];
let i = 0;
while(i < names.length){
    let html = `<div>${names[i]}</div>`
    console.log(html);
    document.write(html);
    i++; 
}

                    ////////////////////////DO WHILE LOOP////////////////////////

let h = 5;
do{
    console.log('This is executed once whether or not the condition is true');
    h++;
} while(h < 5)
