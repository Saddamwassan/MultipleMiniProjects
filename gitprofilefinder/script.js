const contentDiv = document.querySelector('.content');
const findUserBtn = document.querySelector('.finduserbtn');
const userInput = document.querySelector('.userInput');
const endPoint = 'https://api.github.com/users/';
// loader 
const loader = document.querySelector('.loader');


findUserBtn.addEventListener('click',getUserProfile);
async function getUserProfile(){
    showLoader();
    const response = await fetch(`${endPoint}${userInput.value}`);
    const result = await response.json();
    if(result){
        hideLoader();
        showUserDetail(result);
    }
}
// loader function 
function showLoader(){
loader.classList.add('show');
contentDiv.classList.add('hide');
}
function hideLoader(){
    loader.classList.remove('show');
    contentDiv.classList.remove('hide');
    }

function showUserDetail(user){
    // destructing object 
    const {login,avatar_url,public_repos,following_url,created_at,bio} = user;
    contentDiv.innerHTML = `
    <div class='userDiv'>
    <div class="left">
    <p>${created_at}</p>
    <p>${login}</p>
    <p> Public Repos : ${bio}</p>
    <p> Public Repos : ${public_repos}</p>
    <a href="${following_url}">Follow me</a>
    </div>
    <div class="right">
    <img src = ${avatar_url} alt = ${login}>
    </div>
    </div>
    `
    userInput.value = "";
}