const displayValue = document.querySelector('#display');
let curValue = 0;
const btnIncrement = document.querySelector('#BtnInc');
const btnDecrement = document.querySelector('#BtnDec');
const resetBtn = document.querySelector('#resetBtn');

btnIncrement.addEventListener('click',() =>{
    curValue++;
    displayValue.textContent = curValue;
});

btnDecrement.addEventListener('click', () =>{
    curValue--;
    displayValue.textContent = curValue;
})

resetBtn.addEventListener('click', () =>{
    curValue = 0;
    displayValue.textContent = curValue;
})