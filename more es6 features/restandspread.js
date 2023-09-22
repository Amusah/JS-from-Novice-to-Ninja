// REST parameter
// it allows us to bundle up arguments in a function into a single array
// this helps to pass countless number of arguments into a function when declaring the function and you don't know the number of parameters that will be when calling the function;
const restParameter = (...nums)=>{
    console.log(nums);
    return nums.map(num => num*2); // doubling all parameters assigned to the array and saving it into a new array;
}
const result = restParameter(3,6,7,8,9,3,7,1,6,4,7);
console.log(result)

 


// SPREAD operator (arrays)
// it spreads out array elements into individual components

const people = ['henry', 'nerdy', 'josephine', 'ob'];
console.log(...people);
// you can also spread them into a new array kraaa
const members = ['mavis', 'josephine', 'okuta', ...people];
console.log(members);


// SPREAD operator (objects)
const person = { name: 'nana', age: 26, job: 'engineer' };
console.log(person);
const personClone = {...person, nationality: 'Ghanaian'};
console.log(personClone);


