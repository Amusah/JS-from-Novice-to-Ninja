/*******the filter method fetches out all values that satisfies a certain condition from an array********/

/*
 const scores = [12, 99, 91, 91, 10, 15];

 const filteredScores = scores.filter((score) => {
     return score > 20
 });
console.log(filteredScores);
*/ 


/***********************filtering large datasets**********************/

const users = [
    {name: 'henry', premium: true},
    {name: 'Amusah', premium: false},
    {name: 'Josephine', premium: false},
    {name: 'Mavis', premium: true},
];

const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);


