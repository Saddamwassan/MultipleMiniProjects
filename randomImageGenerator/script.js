const mainDiv = document.querySelector('.main');
const loadMore = document.querySelector('.loadMore');

let count = 1;
loadMore.addEventListener('click',()=>{
    loadRandomImages(count +=5);
})
function loadRandomImages(count){
    for(let i=count;i<= count+4 ; i++){
    const imageContainer = document.createElement('img');
    imageContainer.src =`https://picsum.photos/300?random=${i}`;
    mainDiv.append(imageContainer);
}

}