const userOne = {
    username: 'henry',
    email: 'henry@techmonk.com',
    login(){
        console.log('the user logged in');
        // userOne.username = 'henryamusah';
        // console.log(this.username)
    },
    logout(){
        console.log('the user logged out');
    }

};
console.log(userOne.email, userOne.username);
userOne.login();

// console.log(userOne['username'])