/*******************SORT METHOD******************/
// Example 1 - sorting strings
const names = ['mario', 'luigi', 'henry', 'yoshi', 'shaun'];
names.sort();
names.reverse();
console.log(names);


// Example 2 - Sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];
scores.sort(); // has a problem with sorting.... it takes only the first number of each pair of numbers and sorts them
scores.sort((a, b) => a - b); // sorts from smallest to biggest, when u interchange a and b, it sorts from highest to smallest
console.log(scores);



// Example 3 - sorting objects
// sorting algorithm
console.log('// Sorting an array of objects using the highest score');
const players = [
    {name: 'mario', score: 20},
    {player: 'wario', score: 70},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
];

players.sort((a, b)=>{
    if(a.score > b.score){
        return -1;
    } else if(b.score > a.score){
        return 1;
    }else{
        return 0;
    }
});
// the above codes can be simplified by using the codes below...
//players.sort((a,b) => b.score - a.score)

console.log(players);