const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

// two symbol types can never be the same even tho they look alike
console.log(symbolOne === symbolTwo);