/**********************CHAINING MULTIPLE ARRAY METHODS TOGETHER*************************/

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];
// const filteredProducts = products.filter(product => product.price < 20);
// //console.log(filteredProducts);
// const promos = filteredProducts.map((product) =>{
//     return `the ${product.name} is now ${product.price / 2} GHC`
// });
// console.log(promos);

/*With the example above, since both filter and map methods work on 
arrays and also return arrays, we can chain them together
*/

const promos = products
    .filter(product => product.price < 20)
    .map(product => `the ${product.name} is now ${product.price / 2} GHC`);
    console.log(promos);