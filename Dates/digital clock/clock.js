let clock = document.querySelector('.clock');

let tick = ()=>{
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let f = '';
    h >= 12 ? f += 'PM' : f += 'AM';    
    //console.log(h, m, s)

    let html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s} ${f}</span>
    `
    clock.innerHTML = html;
}

setInterval(tick, 1000);