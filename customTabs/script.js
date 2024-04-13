const main = document.querySelector('.main');
const buttons = document.querySelectorAll('.btn');
const content = document.querySelectorAll('.text');
main.addEventListener('click',(e)=>{
   const currentId = e.target.dataset.id;
   if(currentId){
    // removing active class from all buttons 
    buttons.forEach((btn)=>{
        btn.classList.remove('active');
    })
    // adding active class to active button
    e.target.classList.add('active');
    // removing active class from all contents 

    content.forEach((text)=>{
        text.classList.remove('active');
    })
    // adding active class to current content 

    const currentContent = document.getElementById(currentId);
    console.log(currentContent);
    currentContent.classList.add('active');
   }
})