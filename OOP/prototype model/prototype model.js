//Under the hood of constructors
//here we are implementing how classes were being written before the class syntax came (es6)

// here we going to rewrite the login method using the prototype model

function User(username, email){
    this.username = username;
   this.email = email;
}
User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
}
User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
}

const userOne = new User('Henry', 'amusah@ymail.com');
const userTwo = new User('Yeboah', '</henry>@nerdyDev.co.gh');
console.log(userOne, userTwo);
userOne.login().logout();
