class User{
    constructor(userName, passWord){
        // set up properties
        this.userName = userName;
        this.passWord = passWord;
    }
}

const userOne = new User('Henry', prompt('Enter Password'));
const userTwo = new User('Yeboah', prompt('Enter Password'));
console.log(userOne, userTwo);
/*
THE 'new' KEYWORD
1 - it creates a new empty object {}
2 - it binds the value of 'this' to the new empty object
3 - it calls the constructor function to build the object
*/
