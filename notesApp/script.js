const notepad = document.querySelector(".notepad");
let btn = document.getElementById('makeNotes');
btn.addEventListener("click",addNotes);
// show notes 
function showNotes(){
    // localStorage.removeItem("notes");
    notepad.innerHTML = localStorage.getItem("notes");
    
}
showNotes();
// save notes 
function saveNotes(){
    localStorage.setItem("notes",notepad.innerHTML);
}
saveNotes();
// console.log(showNotes());
function addNotes(){
    // creating p 
    let p = document.createElement("p");
    p.className = "pClass";
    p.setAttribute("contenteditable","true");
    // creating del img 
    let img = document.createElement('img');
    img.src = "images/delete.png";
    img.className = "delete";
    p.appendChild(img);
    // append p to notepad 
    notepad.appendChild(p);
}
notepad.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveNotes();

    }else if(e.target.tagName === "P"){
        let input = document.querySelectorAll(".pClass");
        input.forEach((note)=>{
            note.onkeyup = function(){
                saveNotes();
            }
        })
    }
})
// for saving preventing enter default property 
document.addEventListener("keydown",(event)=>{
if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
}
})
