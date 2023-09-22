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
let userOne = new User('henry', '#hasdaijiajd');
let userTwo = new User('Yeboah', 'Amusah');

// CHAINING CLASS METHODS
userOne.login().incScore().incScore().logout();
