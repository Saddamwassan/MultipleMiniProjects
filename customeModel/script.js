const openModel = document.querySelector(".openModel");
const modelWrapper = document.querySelector('.modelWrapper');
const close = document.querySelector('.close');
const icon = document.querySelector('.icon');
const modelBackground = document.querySelector(".modelBackground");
// open model
openModel.addEventListener('click',()=>{
    modelWrapper.style.display = "block";
});
// close model
close.addEventListener('click',()=>{
    modelWrapper.style.display = "none";
});
icon.addEventListener('click',()=>{
    modelWrapper.style.display = "none";
});
// modelBackground 
window.addEventListener('click',(event)=>{
    if(event.target === modelBackground){
      modelWrapper.style.display = 'none';
    }
})