const hexbtn = document.getElementById("hexbtn");
const leftContainer = document.querySelector(".left");
const hexvalue = document.querySelector(".hexvalue");
const copyColorHex = document.getElementById("copyColorHex");
// hex functionality 
hexbtn.addEventListener("click",changeColor);
copyColorHex.addEventListener("click",copyHex);
// hex color 
function changeColor(){
    // console.log('hi');
let hexChars = "0123456789ABCDEF";
let hexColor = "";
// console.log(i);

for(let i = 0,charLength = hexChars.length;i<6;++i){
    // let a = Math.random()* charLength;
    // let b =  Math.floor(a);
    // let c = hexChars.charAt(b);
    hexColor += hexChars.charAt( Math.floor(Math.random()* charLength));
}
hexvalue.textContent = `#${hexColor}`;
leftContainer.style.background = `#${hexColor}`;
}
// copyhex 
function copyHex(){
    navigator.clipboard.writeText(hexvalue.textContent);
    console.log(hexvalue.textContent);  
    alert("New Hex value is copied!");
}
// rgb color -------------------------
const rgb_btn = document.querySelector(".rgbbtn");
const right = document.querySelector(".right");
const red = document.querySelector(".redColor");
const green = document.querySelector(".greenColor");
const blue = document.querySelector(".blueColor");
const rgbvalue = document.querySelector(".rgbvalue");
const copyrgbbtn = document.getElementById("copyColorRgb");
// change rgb color 
rgb_btn.addEventListener("click",changeRgbColor);

function changeRgbColor(){
    let redValue = red.value;
    let greenValue = green.value;
    let blueValue = blue.value;
    rgbvalue.textContent = `rgb(${redValue},${greenValue},${blueValue})`;
    right.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}
// copy rgb color 
copyrgbbtn.addEventListener("click",copyRgb);
function copyRgb(){
    navigator.clipboard.writeText( rgbvalue.textContent);
    alert("rgb value is copied!");
}