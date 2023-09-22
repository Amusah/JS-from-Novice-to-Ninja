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
db.collection('recipe').get().then(queryData =>{
    // when we have some data
    //const documents = queryData.map(doc => doc.data());
    queryData.forEach(doc=>{
        // console.log(doc.data());
        //console.log(doc.id)
        addRecipe(doc.data(), doc.id);
    });
    //addRecipe(documents);
}).catch(err =>{
    console.log(err);
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
        location.reload();
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
        console.log(id);
        db.collection('recipe').doc(id).delete().then(() =>{
            console.log('document deleted');
            location.reload();
        }).catch(err => console.log('Error deleting document'));
        
    }
});
