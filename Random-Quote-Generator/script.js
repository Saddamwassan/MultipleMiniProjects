const quote = document.querySelector(".quote");
const btn = document.querySelector(".btn");
const loader = document.querySelector(".loader");
// show loader method 
function showLoader(){
    loader.classList.add("show");
    quote.classList.add("hide");
}
// hide loader
function hideLoader(){
    loader.classList.remove("show");
    quote.classList.remove("hide");
}
btn.addEventListener("click",generateQuote);
function generateQuote(){
    showLoader();
    fetch("https://dummyjson.com/quotes/random").
    then((response)=>response.json()).
    then((result)=>{
        if(result){
            hideLoader();
            showQuotes(result);
        }
    }).
    then((e)=>console.log(e));
}
function showQuotes(quotation){
    console.log(quotation);
    quote.innerHTML = `
    <div class = dynamicDiv>
    <p>${quotation.id}</p>
    <p>${quotation.author}</p>
    <p>${quotation.quote}</p>
    </div>
    `
}
