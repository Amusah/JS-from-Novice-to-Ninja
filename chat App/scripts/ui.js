// Render chat template to the dom
// Clear the list of chat (when the room changes);

class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        const timeStamp = dateFns.distanceInWordsToNow(
            data.created_At.toDate(),
            { addSuffix: true}
        );
        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}: </span>
                <span class="message">${data.message}<br></span>
                <span class="time">${timeStamp}</span>
            </li>
        `;
        this.list.innerHTML += html;
    }
}