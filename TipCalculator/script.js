const billAmount = document.getElementById('billAmount');
const discount = document.getElementById('Discount');
const tips = document.getElementById('Tips');
const noOfCustomers = document.getElementById('noOfCustomers');
const generateBill = document.querySelector('.generateBill');
// output 
const tipPayed = document.querySelector('.tippayed');
const amountPayed = document.querySelector('.amountpayed');
// showing numbers in front of range 
const discPercent = document.getElementById('discPercent');
const tipPercent = document.getElementById('tipPercent');
const customerNo = document.getElementById('customerNo');
// tippayed and amountpayed 
const totalTipPayed = document.getElementById('totalTipPayed');
const totalAmountToPay = document.getElementById('totalAmountToPay');




generateBill.addEventListener('click',CalculateBill);
function CalculateBill(){
        // showing range values 
        discPercent.textContent = discount.value;
        tipPercent.textContent = tips.value;
        customerNo.textContent = noOfCustomers.value;
        // calculated totalTip and TotalAmountToPay 
        const totalAmount = billAmount.value-(billAmount.value*discount.value)/100;
        const totalTip = (totalAmount *tips.value)/100;
        const finalAmount = totalAmount+totalTip;

        totalTipPayed.textContent = totalTip;
        totalAmountToPay.textContent = finalAmount;

    }