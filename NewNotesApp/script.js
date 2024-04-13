const userInput = document.querySelector('.userInput');
const addNoteBtn = document.querySelector('.addNote');
const notesList = document.querySelector('.notesList');
const errorMsg = document.querySelector('.errorMsg');

let currentEditedValue = 0;
addNoteBtn.addEventListener('click',()=>{
    addNote();
})
// creating a new note 
function addNote(){
    const note = userInput.value.trim();
    // if input is empty 
    if(note === ""){
        errorMsg.textContent = "Please write some text first!";
        return false;
    }
    // edit functionality 
    else if(addNoteBtn.innerText == "Edit Note"){
        editAnyNote(currentEditedValue.target.parentElement.previousElementSibling.innerText);
        currentEditedValue.target.parentElement.previousElementSibling.innerText = note;
        addNoteBtn.innerText = 'Add Note';
        userInput.value = '';
    }
    // adding new note 
    else{
        const dynamicData = createNote(note);
        notesList.appendChild(dynamicData);
        errorMsg.textContent = "";
        userInput.value = "";
        // saving notes into localstorage  
        saveToStorage(note);
    }
}
function editAnyNote(editedNode){
    let noteData;
    if(localStorage.getItem('notes')=== null){
        noteData = [];
    }else{
        noteData = JSON.parse(localStorage.getItem('notes'));
        index = noteData.indexOf(editedNode);
        noteData[index]= userInput.value;
        noteData = localStorage.setItem('notes',JSON.stringify(noteData));
    }
}
function createNote(note){
    const p = document.createElement('p');
    p.textContent = note;
    const li = document.createElement('li');
    li.classList.add('listItem');
    li.appendChild(p);

    // edit button 
    const editButton = document.createElement('button');
    editButton.textContent = "edit";
    editButton.classList.add('btn', 'editBtn');
     // delete button 
     const deleteButton = document.createElement('button');
     deleteButton.textContent = "delete";
     deleteButton.classList.add('btn','deleteBtn');
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('btnDiv');
    btnDiv.appendChild(editButton);
    btnDiv.appendChild(deleteButton);
    li.appendChild(btnDiv)
    return li;       
}
function saveToStorage(note){
    let notesData;
    if(localStorage.getItem('notes') === null){
        notesData = [];
    }else{
        notesData = JSON.parse(localStorage.getItem('notes'));
    }
    notesData.push(note);
    localStorage.setItem('notes',JSON.stringify(notesData));
}
document.addEventListener('DOMContentLoaded',fetchAllData);
// fetching data from local storage 
function fetchAllData(){
    let notesData;
    if(localStorage.getItem('notes') === null){
        notesData = [];
    }else{
        notesData = JSON.parse(localStorage.getItem("notes"));
        notesData.forEach((item)=>{
            const noteItem = createNote(item);
            notesList.appendChild(noteItem);
        })
}
}
notesList.addEventListener('click',editAndDeleteWork);
function editAndDeleteWork(event){

    // for delete 
    if(event.target.innerHTML === 'delete'){
        notesList.removeChild(event.target.parentElement.parentElement);
        // to delete from array 
        deleteFromArray(event.target.parentElement.parentElement);
    }
    // for edit 
    if(event.target.innerHTML === 'edit'){
        let editedValue = event.target.parentElement.previousElementSibling.innerText;
        userInput.value = editedValue ;
        addNoteBtn.innerText = 'Edit Note';
        userInput.focus();
        currentEditedValue = event;
    }
}
// deleting from localStorage  
function deleteFromArray(currentNote){
    let noteData;
    if(localStorage.getItem('notes') === null){
        noteData = [];
    }else{
        noteData = JSON.parse(localStorage.getItem('notes'));
        let currentNoteItem = currentNote.firstChild.innerHTML;
        let index = noteData.indexOf(currentNoteItem);
        noteData.splice(index,1);
        // sending updated array to local storage 
        localStorage.setItem('notes',JSON.stringify(noteData));
    }
}