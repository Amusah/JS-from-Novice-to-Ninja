// function declaration
function speak(){
    console.log('this is a function declaration');
}speak();

// function expression
const myFunction = function(){
    alert('this is a function expression');
};myFunction();

///////ARGUMENT AND PARAMETERS////////////

const myFunc = function(a, b){
     a = Number(prompt('Enter num 1'));
     b = Number(prompt('Enter num 2'));
    let result = a + b;
    console.log(result)
};myFunc();
