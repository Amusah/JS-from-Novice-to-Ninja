//Under the hood of constructors
//here we are implementing how classes were being writting before the class syntax came

function User(username, email){
    this.username = username;
   this.email = email;
   this.login = function(){
       console.log(`${this.username} has logged in`)
   }
}

// class User{
//     constructor(userName, passWord){
//         // set up properties
//         this.userName = userName;
//         this.passWord = passWord;
//     }
// }

const userOne = new User('Henry', 'Amusah');
const userTwo = new User('Yeboah', 'Amusah');
console.log(userOne, userTwo);
userOne.login();