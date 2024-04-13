let nameError = document.getElementById("nameerror");
let emailError = document.getElementById("emailerror");
let phoneError = document.getElementById("phoneerror");
let messageError = document.getElementById("messageerror");
let submitError = document.getElementById("submiterror");

// name validation 
function validateName(){
let username = document.getElementById('usernameid').value;
if(username.length == 0){
    nameError.innerHTML="name is required";
    return false;
}
if(!username.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "write full name";
    return false;
}else{
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
}
// email validation 
function validateEmail(){
    let email = document.getElementById("emailid").value;
    if(email.length == 0){
        emailError.innerHTML = "email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z \._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML ="invalid Email.";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
// validate phone 
function validatePhone(){
    let phone = document.getElementById("phoneid").value;
    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    // if(phone.length!==10){
    //     phoneError.innerHTML = "Ph:# should be 10 digits";
    //     return false;
    // }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "phone no should be 10 digits.";
        return false;
    }
    phoneError.innerHTML= '<i class="fa-solid fa-check"></i>';
}
// validate message 
function validateMessage(){
 let message = document.getElementById("messageid").value;
 let words = 25;
 let remain = words - message.length;
 if(remain>0){
     messageError.innerHTML = remain + " more words to be written.";
     return false;
 }
 messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
 return true;
}
// validating form
document.getElementById("submitbtn").addEventListener("click",validateForm);
function validateForm(e){
    e.preventDefault();
if(!validateName()||!validateEmail()||!validatePhone()||!validateMessage()){
    submitError.style.display = "block";
    submitError.innerHTML= "Fill the form properly.";
    setInterval(() => {
        submitError.style.display = "none";
    },3000);
    return true;
}
}