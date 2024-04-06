const pagelist = document.querySelector('.pagelist');
const prevbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next');

function createPages(){
    for(let i=0;i<=99;i++){
        pagelist.textContent = `card ${i}`
    }
}
