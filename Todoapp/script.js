let inputText = document.getElementById("inputText");
let ul = document.getElementById("ul");
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click",addTask);


function addTask(){
    if(inputText.value === ""){
        alert("Enter some value");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        ul.appendChild(li);
        let cutbtn = document.createElement("span");
        cutbtn.innerHTML = "\u00d7";
        li.appendChild(cutbtn);
    }
    inputText.value = "";
    saveData();
}
// toggle class and remove li 
ul.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
});
// save data into browser 
function saveData(){
    localStorage.setItem("tasks",ul.innerHTML);
}
function showData(){
    ul.innerHTML = localStorage.getItem("tasks");
};
// showing saved data 
showData();
