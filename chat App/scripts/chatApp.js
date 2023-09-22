// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

// Add a new chat
newChatForm.addEventListener('submit', e =>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatRoom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

// Update username
newNameForm.addEventListener('submit', e =>{
    e.preventDefault();
    // Update username via chatroom class
    const newName = newNameForm.name.value.trim();
    chatRoom.updateName(newName);
    // Reset the form
    newNameForm.reset();
    // show and hide update message
    updateMsg.classList.remove('d-none'); 
    updateMsg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMsg.classList.add('d-none'), 3000);
});

rooms.addEventListener('click', e =>{
    //console.log(e)
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatRoom.updateRoom(e.target.getAttribute('id'));
        chatRoom.getChats(chat => chatUI.render(chat));
    }
})

// check local storage for an existing username
let isUser = localStorage.username ? localStorage.username : 'anonymous'
//class instances
const chatUI = new ChatUI(chatList);
const chatRoom = new Chatroom('general', isUser);

// get chats and render
chatRoom.getChats(data => chatUI.render(data));