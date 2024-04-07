const pageList = document.querySelector('.pagelist');
const pageButtons = document.querySelector('.pageButtons');
const prevbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next');

createPages();

function createPages(){
    for(let i=1;i<=100;i++){
        const card = document.createElement('li');
        card.classList.add('listItem');
        card.textContent = `card ${i}`;
        pageList.appendChild(card);
    }
}

const allPageListItems = document.querySelectorAll('.listItem');
const pagesLimit = 10;
let pageCount = Math.ceil(allPageListItems.length/pagesLimit);
let currentPage = 1;

createPageNums();

function createPageNums(){
    for(let i=1; i<=pageCount; i++){
        creatbuttons(i);
    }
}
function creatbuttons(index){
    const button = document.createElement('button');
    button.textContent = index;
    button.classList.add('pagebtn');
    button.setAttribute('page-index',index);
    pageButtons.appendChild(button);
}

getCurrentPage(1);

function getCurrentPage(page){
currentPage = page;
console.log(currentPage);
activePage();
buttonStatus();
const previousPageRange = (currentPage - 1)*pagesLimit;
const currentPageRange = (currentPage)*pagesLimit;

allPageListItems.forEach((item,index)=>{
    item.classList.add('hide');
    if(index>=previousPageRange && index<currentPageRange){
        item.classList.remove('hide');
        }
    })
}
function activePage(){
const getAllButtons = document.querySelectorAll('.pagebtn');
getAllButtons.forEach((btn)=>{
    btn.classList.remove('activeBtn');
    const activePageIndex = Number(btn.getAttribute('page-index'));
    if(activePageIndex === currentPage){
        btn.classList.add('activeBtn');
    }
});
}
function buttonStatus(){
    if(currentPage === 1){
        disableButton(prevbtn);
    }else{
        enableButton(prevbtn);
    }
    if(currentPage === pageCount){
        disableButton(nextbtn);
    }else{
        enableButton(nextbtn);
    }
}
function disableButton(getbtn){
    getbtn.setAttribute('disabled',true);
}
function enableButton(getbtn){
    getbtn.removeAttribute('disabled');
}
// moving backward and forward with buttons 
prevbtn.addEventListener('click',()=>{
    getCurrentPage(currentPage-1);
})
nextbtn.addEventListener('click',()=>{
    getCurrentPage(currentPage+1);
})
// getting current page 
document.querySelectorAll('.pagebtn').forEach((btn)=>{
    const currentPageIndex = Number(btn.getAttribute('page-index'));
    if(currentPageIndex){
        btn.addEventListener('click',()=>{
            // getCurrentPage(currentPageIndex);
        })
    }
})



