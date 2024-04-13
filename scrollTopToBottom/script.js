const content = document.querySelector('.content');
const down = document.querySelector('.down');
const up = document.querySelector('.up');
const loader = document.querySelector('.loader');
const dataFetchBtn = document.querySelector('.dataFetcher');

async function fetchApiData(){
    const response = await fetch('https://dummyjson.com/users',{
        method:'GET',
    });
    showLoader();
    const result = await response.json();
    if(result && result.users){
        showUserData(result.users);
    }
    removeLoader();
}
// scroll down 
down.addEventListener('click',()=>{
    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth",
    })
})
// scroll up 
up.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
dataFetchBtn.addEventListener('click',fetchApiData);
// functions 
// fetchApiData();
// show user data 
function showUserData(users){
    users.forEach((user)=>{
        const userDetail = document.createElement('div');
        userDetail.classList.add('userDiv');
        userDetail.textContent = user.firstName;
        content.appendChild(userDetail);
    })
}
// show loader 
function showLoader(){
    loader.classList.add('showloader');
    content.classList.add('hideUserData');
}
// hide loader 
function removeLoader(){
    loader.classList.remove('showloader');
    content.classList.remove('hideUserData');
}