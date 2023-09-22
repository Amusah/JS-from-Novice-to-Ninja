const scores = [10, 20, 40, 100, 32];

i = 0;
while(i < scores.length){
    if(scores[i] === 40){
        console.log(`${scores[i]} is the highest score`)
        break;
    }
    console.log(scores[i])
    i++
}