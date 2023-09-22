import { styleBody, addTitle, contact } from './dom';
import users, { getPremiumUsers, dataSheet, numbers } from './data';

const premiumUsers = getPremiumUsers(users);
console.log(users, premiumUsers);

console.log('this is the index.js file');
addTitle('test');
styleBody('peachpuff');
document.write(contact.concat(' nana is a kinda good dude'));

console.log([...dataSheet]);
console.log(...numbers, 'wohoo');
