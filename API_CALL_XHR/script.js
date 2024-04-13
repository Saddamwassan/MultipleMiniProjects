const dataDiv = document.querySelector(".datadiv");
// fetch with XHR 
function fetchWithXhr(){
    // creating XHR object 
    const xhr = new XMLHttpRequest();
    // get request with api url 
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = ()=>{
        if(xhr.status === 200){
            // console.log(xhr);
            showData(xhr.response);
            }else{
            console.log("Fetch Error");
            }
    }
}
// fetch method 
function fetchWithFetchMethod(){
    const fetchRequest = fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET',
    })
    // promise 
    fetchRequest
    .then((response)=>response.json())
    .then((result)=>showData(result))
    .catch((e)=>console.log(e));
}

// async method 
async function fetchWithAsync(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();
    showData(result);
}
// advance method using promises,xhr and async await together 
function assistingMethod(method,url){
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = "json";
        xhr.send();

        xhr.onload=()=>{
            if(xhr.status === 200){
                resolve(xhr.response);
            }else{
                reject(xhr.response);
            }
        }
    })
    return promise;
}
async function fetchWithXHRAndAsyncAwait(){
    const response = await assistingMethod('GET','https://jsonplaceholder.typicode.com/posts');
    showData(response);
    console.log(response);
}

// show data method 
function showData(data){
    dataDiv.innerHTML = data.map((currentBlock) =>`
    <div class="datablock">
    <h3>${currentBlock.title}</h3>
    <p>${currentBlock.body}</p>
    </div>
    `).join("");
}
// fetchWithXhr();
// fetchWithFetchMethod();
// fetchWithAsync();
fetchWithXHRAndAsyncAwait();


