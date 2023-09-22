class User{
    constructor(name, password){
        this.userName = name;
        this.passWord = password;
        this.score = 0;
    }
    login(){
        console.log(`${this.userName} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.userName} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.userName} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User{
    constructor(userName, passWord, title){
        super(userName, passWord);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.userName !== user.userName);
    }
}

let userOne = new User('henry', '#hasdaijiajd');
let userTwo = new User('Yeboah', 'Amusah');
let userThree = new Admin('Obenewa', 'Kokonut', 'seller');
// chaining class methods
userOne.login().incScore().incScore().logout();

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);
console.log(userThree);