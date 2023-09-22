/*******************************find method**********************************/
/* The find method loops through an array and returns 
the very first element that satisfies a 
specific condition thus ignoring the others and terminating execution
*/
const scores = [10, 5, 20, 40, 60, 10, 20, 70];

const firstHighScore = scores.find((score)=>{
    return score > 50;
});
console.log(firstHighScore);
