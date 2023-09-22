/***********************DATE AND TIME****************************/
const now = new Date();
const before = new Date('April 18 2019 12:38:30 AM')

console.log(now);
console.log(typeof now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//DATE STRINGS
console.log(now.toDateString());
console.log(now.toLocaleString());

// TIME STAMPS
console.log(now.getTime());
console.log(now.getTime(), before.getTime());

let timeDifference = now.getTime() - before.getTime();
console.log('The time difference in milliseconds is: ' + timeDifference);

let mins = Math.round(timeDifference / 1000 / 60);
console.log('the time difference in minutes is: ' + mins);

let hours = Math.round(mins / 60);
console.log('the time difference in hours is: ' + hours);

let days = Math.round(hours / 24);
console.log('the time difference in days is: ' + days);

// CONVERTING TIME STAMPS INTO DATE OBJECTS
let timeStamp = 1675938474990;
console.log('the converted time stamp is: ' + new Date(timeStamp));