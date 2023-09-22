/****************************OBJECT LITERALS******************************/
const user = {
    name: 'Henry Amusah',
    age: 25,
    email: 'henryamusah@gmail.com',
    location: 'Takoradi',
    blogs: ['UavTech', 'artifitial intelligence'],
    login(){
        console.log('The user logged in')
    },
    logBlogs(){
        console.log('this user has written the following blogs')
        this.blogs.forEach(blogs =>{
            console.log(blogs)
        })
    }
}
//console.log(user)
//console.log(user.blogs[1]);
//console.log(user[prompt('enter what you want to access')]);
user.logBlogs();

let num1 = 4;
let num2 = num1;
num1 = 5
console.log(num2)
