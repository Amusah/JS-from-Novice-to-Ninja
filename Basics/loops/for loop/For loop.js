// For loops
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

const names = ['henry', 'mario', 'luigi'];

for(i = 0; i < names.length; i++){
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
    document.write(html);
}