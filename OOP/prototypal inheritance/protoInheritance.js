//Under the hood of constructors
//here we are implementing how classes were being written before the class syntax came


/********************PROTOTYPE INHERITANCE***********************/

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

function Admin(username, email, title){
    User.call(this, username, email); // this is almost the same as using the super() in Js classes
    this.title = title
}

Admin.prototype = Object.create(User.prototype); // inheriting the User prototype onto the Admin prototype
Admin.prototype.logOut = function(){ // Only admins will have access to this logout functionality
    //statement
}

const userOne = new User('Henry', 'amusah@ymail.com');
const userTwo = new User('Yeboah', '</henry>@nerdyDev.co.gh');
let userThree = new Admin('nerdy', 'henry@nerdyDev.co.gh', 'nerdyDev');

console.log(userThree);