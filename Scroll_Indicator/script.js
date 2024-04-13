const progressContainer = document.querySelector('.progressContainer');
const contentDiv = document.querySelector('.content');
const progressBar = document.querySelector('.progressBar');
function fetchApi(){
    fetch("https://dummyjson.com/posts",{
        method:'GET'
    })
    .then((response)=>response.json())
    .then((result)=>showPost(result.posts))
    .then((e)=>console.log(e));
}
fetchApi();

window.onscroll = function(){
    handleScroll();
}
 function handleScroll(){
const scrollFromTop = document.documentElement.scrollTop;
const  height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scrollPercent = (scrollFromTop/height)*100;
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);

// console.log(height);


progressBar.style.width = `${scrollPercent}%`;
}

function showPost(posts){
    console.log(posts);
posts.forEach((post)=>{
    const postWrapper = document.createElement('div');
    postWrapper.classList.add('postWrapper');
    
    const postTitle = document.createElement('h3');
    postTitle.textContent = post.title;

    const postBody = document.createElement('p');
    postBody.textContent = post.body;

    const postTag = document.createElement('div');
    postTag.textContent = post.tags.map((item)=>item).join(",");
    postTag.classList.add('postTags');

    // appending into postWrapper 
    postWrapper.appendChild(postTitle);
    postWrapper.appendChild(postBody);
    postWrapper.appendChild(postTag);
    // appending postwrapper into contentDiv 
    contentDiv.appendChild(postWrapper);
})
}
