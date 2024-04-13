const main = document.querySelector('.main');
const filterBtns = document.querySelector('.filterBtns');
const content = document.querySelector('.content')
const categories = ['All','Male','Female','Child'];
const data = [
    {
        id:'Male',
        label:' Male wants a car1.',
    },
    {
        id:'Male',
        label:'Male wants a car2.',
    }, {
        id:'Male',
        label:'Male wants a car3.',
    }, {
        id:'Male',
        label:'Male wants a car4.',
    }, {
        id:'Female',
        label:'She wants a book1.',
    },
    {
        id:'Female',
        label:'She wants a book2.',
    }, {
        id:'Female',
        label:'She wants a book3.',
    }, {
        id:'Female',
        label:'She wants a book4.',
    }, {
        id:'Child',
        label:'Child wants a toy1.',
    },
    {
        id:'Child',
        label:'Child wants a toy2.',
    }, {
        id:'Child',
        label:'Child wants a toy3.',
    }, {
        id:'Child',
        label:'Child wants a toy4.',
    },
];
// create btn 
function createButtons(){
    categories.forEach((category)=>{
    const newButton = document.createElement('button');
    newButton.classList.add('btn');
    newButton.setAttribute('data-filter',category);
    newButton.innerHTML = category;
    filterBtns.appendChild(newButton);
    })
}
// create content 
function createContent(){
    data.forEach((item)=>{
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('card',item.id);
        contentDiv.textContent = item.label;
        content.appendChild(contentDiv);
    });
}
createButtons();
createContent();
function filterCards(category,allcards){
    allcards.forEach((onecard)=>{
    const isShowAllCards = category.toLowerCase() === 'all';
    const isItemFiltered = !onecard.classList.contains(category);
    if(isItemFiltered && !isShowAllCards){
        console.log(!isShowAllCards);
        onecard.classList.add('hide');
    }else{
        onecard.classList.remove('hide');
    }
});
}
// to filter data 
const allButtons = document.querySelectorAll('.btn');
const allcards = document.querySelectorAll('.card');
allButtons.forEach((singlebtn)=>{
    singlebtn.addEventListener('click',()=>{
        let category = singlebtn.dataset.filter;
        filterCards(category,allcards);
    });
})