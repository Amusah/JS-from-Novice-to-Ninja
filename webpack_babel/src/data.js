const users = [
    {name: 'mario', premium: true},
    {name: 'luigi', premium: false},
    {name: 'yoshi', premium: true},
    {name: 'toad', premium: true},
    {name: 'peach', premium: false}
];

const getPremiumUsers = (users) =>{
    return users.filter(user => user.premium);
};

const dataSheet = new Set();
dataSheet.add({
    name: 'Henry Amusah',
    age: '26',
    job: 'IT Support'
});

let numbers = [1,2,3,4,5,6,6];


//exporting default value
//export default users; 

// another alternative for exporting both defaullt and named values in a file
export { getPremiumUsers, dataSheet, numbers, users as default};

