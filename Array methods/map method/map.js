/*************************MAPS*****************************/
/*this array method (map) takes individual array element, and performs tasks on it and then saves the outcome in an array
 which means map nethod is indestuctive which means it does not destroy the first array. hence it returns the array elements or values that satisfiesy a specific condition */

const prices = [32, 20, 21, 10, 41, 34, 89];

const salePrices = prices.map((price)=>{
    return price / 2;
});
console.log(salePrices);

/*************************Another example*****************************/
const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];
const saleProducts = products.map((product)=>{
    if(product.price > 30){
        return {name: product.name, price: product.price / 2};
    } else{
        return product;
    }
});
console.log(saleProducts);