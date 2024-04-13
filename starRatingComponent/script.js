const stars = document.querySelectorAll(".fa-star-o");
const ratingValue = document.querySelector(".ratingValue");
let currentSelectedStars = -1;

stars.forEach((item,index)=>{
    item.dataset.rating = index+1;
    item.addEventListener('mouseover',mouseHover);
    item.addEventListener("click",onClick);
    item.addEventListener("mouseleave",onMouseLeave);
})
// on mouse hover 
function mouseHover(event){
    const currentRating = event.target.dataset.rating;
    // console.log(currentRating);
    if(!currentRating) return;
    else updateRating(currentRating);
}
function updateRating(rating){
    for(var i=0;i<5;i++){
        if(i<rating){
            stars[i].classList.replace("fa-star-o","fa-star");
        }
        else{
            stars[i].classList.replace("fa-star","fa-star-o");
        }
    }
}
function onClick(event){
    const currentRating = event.target.dataset.rating;
    currentSelectedStars = currentRating;
    updateRating(currentSelectedStars);
    ratingValue.textContent = currentSelectedStars;
}
function onMouseLeave(){
updateRating(currentSelectedStars);
}