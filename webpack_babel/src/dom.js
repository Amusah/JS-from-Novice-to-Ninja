console.log('dom file');

const body = document.querySelector('body');

const styleBody = (css)=>{
    //body.style.background = 'peachpuff';
    body.style.background = css;
}

const addTitle = (text)=>{
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title)
}
 
const contact = 'henry@droneTech.co.gh';
// styleBody();
// addTitle('hello world from the dom file');

export { styleBody, addTitle, contact };