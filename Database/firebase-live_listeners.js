const list = document.querySelector('ul');
const form = document.querySelector('form');
const msg = document.querySelector('.alert');

const addRecipe = (recipe, id) =>{
    let time = recipe.created_At.toDate();
    let title = recipe.title;
    let html = `
        <li data-id="${id}">
            <div>${title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `
    //console.log(recipe)
    list.innerHTML += html;
}

//Getting documents (READ)
// implementing real-time listeners in order to automatically update the ui when there is a change in the database

const deleteRecipe = (id) =>{ //this function deletes Recipes from the UI
    const recipe = document.querySelectorAll('li');
    recipe.forEach(recipe =>{
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    });

}

db.collection('recipe').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        } else if(change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    })
});

//Adding document (CREATE)
form.addEventListener('submit', e =>{
    e.preventDefault(); 
    let now = new Date();
    const recipe = {
        author: 'nerdy',
        created_At: firebase.firestore.Timestamp.fromDate(now),
        title: form.recipe.value.trim()
    }

    db.collection('recipe').add(recipe).then(() =>{
        console.log('Recipe Added');
    }).catch(err =>{
        console.log*(err);
    })

    form.reset();
});


// DELETING DATA
list.addEventListener('click', e => {
    //console.log(e);
    if(e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        //console.log(id);
        db.collection('recipe').doc(id).delete().then(() =>{
            console.log('document deleted');
        }).catch(err => console.log('Error deleting document'));
        
    }
});
