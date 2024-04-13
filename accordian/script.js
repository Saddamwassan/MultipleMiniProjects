const data = [
    {
        question:"Where do you live ?",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non atque, pariatur ipsa sed aut optio qui, dignissimos sit, cumque possimus earum.",
    },
    {
        question:"What are you doing?",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non atque, pariatur ipsa sed aut optio qui, dignissimos ",
    },
    {
        question:"Are you available?",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non atque, pariatur ipsa sed aut optio qui, dignissimos ",
    },
    {
        question:"Can you make this project?",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non atque, pariatur ipsa sed aut optio qui, dignissimos ",
    },
    {
        question:"What is your experience in field?",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non atque, pariatur ipsa sed aut optio qui, dignissimos ",
    }

];

const accordian = document.getElementById("accordian");
function addData(){
    accordian.innerHTML = data.map(
        (content)=>`
        <div class = "item">
        <div class = "title">
        <h3>${content.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class = "content">
        <p>${content.answer}</p>
        </div>
        </div>
        `
        ).join("");
}
addData();

const accordianTitles = document.querySelectorAll(".title");
// console.log(accordianTitles);
accordianTitles.forEach(currentItem =>{
    currentItem.addEventListener("click",()=>{
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active');
        }else{
            let activeClasses = document.querySelectorAll(".active");
            activeClasses.forEach(currentActiveItem=>{
                currentActiveItem.classList.remove("active");
            });
            currentItem.classList.add("active");
        }
    })
})

