// Intialize counting from 0
let count =0;

//Selecting values and buttons
let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btnsp');

// console.log(btns);

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const number = e.currentTarget.classList;
        if (number.contains('decrease')) {
            count--;
        }
        else if (number.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        else if(count < 0){
            value.style.color = 'red';
        }
        else{
            value.style.color = 'black';
        }
        value.textContent = count;
    });
});