const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const progressbar = document.querySelector('.progress');
const iconsWrapper = document.querySelectorAll('.iconsWrapper');

let currentStep = 1;
next.addEventListener('click',()=>{
    if(currentStep<iconsWrapper.length){
        currentStep++;
    }
    updateProgress();
})
prev.addEventListener('click',()=>{
    if(currentStep>1){
        currentStep--;
    }
    updateProgress();
})
function updateProgress(){
    iconsWrapper.forEach((item,index)=>{
        if(index<currentStep){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })
    progressbar.style.width = ((currentStep-1)/(iconsWrapper.length -1)*100 +"%");
    if(currentStep === 1){
        prev.disabled = true;
    }else if(currentStep === iconsWrapper.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
