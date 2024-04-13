const body = document.querySelector("body");
const btn = document.querySelector(".btn");
btn.addEventListener('click',()=>{
    if(body.getAttribute('data-theme') === "dark"){
        body.setAttribute("data-theme","null");
    }else{
        body.setAttribute("data-theme","dark");
    }
})
// btn.addEventListener("click",changeTheme);
// function changeTheme(){
//     if(body.classList.contains("light")){
//         body.classList.remove("light");
//         body.classList.add("dark");
//     }else{
//         body.classList.remove("dark");
//         body.classList.add("light");
//     }
//     // for btn 
//     if(btn.classList.contains("light")){
//         btn.classList.remove("light");
//         btn.classList.add("dark");
//     }else{
//         btn.classList.remove("dark");
//         btn.classList.add("light");
//     }
// }