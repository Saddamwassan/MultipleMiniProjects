const userInput = document.querySelector('.userInput');
const addNoteBtn = document.querySelector('.addNote');
const notesList = document.querySelector('.notesList');
const errorMsg = document.querySelector('.errorMsg');

addNoteBtn.addEventListener('click',()=>{
    addNote();
})
// creating a new note 
function addNote(){
    const note = userInput.value.trim();
    // console.log(note);
    if(note === ""){
        errorMsg.textContent = "Please write some text first!";
        return false;
    }
    else{
        createNote(note);
        errorMsg.textContent = "";
        userInput.value = "";
        // saving notes into localstorage  
        saveToStorage(note);
    }
    function createNote(note){
        const p = document.createElement('p');
        p.textContent = note;
        const li = document.createElement('li');
        li.classList.add('listItem');
        li.appendChild(p);
        return li;       
    }
}
function saveToStorage(note){
    let notesData;
    if(localStorage.getItem('notes' === null)){
        notesData = [];
    }else{
        notesData = JSON.parse(localStorage.getItem('notes'));
    }
    notesData.push(note);
    localStorage.setItem('notes',JSON.stringify(notesData));
}
document.addEventListener('DOMContentLoaded',()=>{
    let notesData;
    if(localStorage.getItem('notes' === null)){
        notesData = [];
    }else{
        notesData = JSON.parse(localStorage.getItem(notes));
        notesData.forEach((item)=>{
            const noteItem = createNote(item);

        })
    }
})

