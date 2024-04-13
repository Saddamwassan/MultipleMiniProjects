const qrCodeContainer = document.querySelector('.QRContainer');
const message = document.querySelector('.message');
const generateBtn = document.querySelector('.generate');
const input = document.getElementById('inputBox');

function createQr(){
    if(input.value.trim().length>0){
            generateQrcode();
        }else{
        message.textContent = 'Enter some value to generate QR Code.'
    }
    function generateQrcode(){
        qrCodeContainer.innerHTML = '';
        new QRCode(qrCodeContainer,{
            text:input.value,
            width:230,
            height:220,
            colorLight:'#0000',
            colorDark:'#008000',
        });
        input.value = "";
}
}
generateBtn.addEventListener('click',()=>{
    createQr();
})


