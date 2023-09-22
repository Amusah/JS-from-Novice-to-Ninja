// SETS
const myList = ['nana', 'kofi', 'indomie', 'kofi'];
console.log(myList);

// let nameSet = new Set(['nana', 'kofi', 'indomie', 'kofi']);
// let nameSet = new Set(myList);
// console.log(nameSet);

const uniqueNames = [...new Set(myList)];
console.log(uniqueNames);

// adding element to a set
const ages = new Set();
ages.add(99);
ages.add(89).add(454);
console.log(ages);

// deleting element from a set
ages.delete(99);
console.log(ages);

//checking the size or length of a set
console.log(ages.size);

// checking wheather a specific item exists in a set
console.log(ages.has(454));

// deleting all elements from a set
ages.clear();
console.log(ages);

const nerds = new Set([
    {name: 'presh', age: 23},
    {name: 'nerdyDev', age: 26},
    {name: 'morgan', age: 26}
]);


nerds.forEach(nerd => {
    console.log(nerd.name, nerd.age)
});
