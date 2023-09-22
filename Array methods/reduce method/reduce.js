/****************************
 * Reduce Methods
 THE REDUCE METHOD CHECKS AND RETURNS THE QUANTITY OF VALUES THAT MEET OR SATIFIES A SPECIFIC CONDITION
 * ***************************/
//cheching number of scores that are over 50. this return the quantity of the numbers that are over 50
/*
const scores = [10, 20, 60, 70, 90, 30];
const result = scores.reduce((acc, curr)=>{
    if(curr > 50){
        acc++;
    }
    return acc;
},0);
console.log(result);
*/

const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 38},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 80},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 60},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 70},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
];
// Here, we are trying to add all the scores of mario in this array of objects using the reduce method;
const marioTotalScores = scores.reduce((acc, curr)=>{
    if(curr.player === 'mario'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotalScores);
