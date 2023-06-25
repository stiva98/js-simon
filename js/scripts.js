//Generazione di 5 numeri casuali
const casualNumber = 5;
const arrCasualNumber = [];
const maxNumberInArr = 10;
const myContainer = document.querySelector('.container');
const buttonStart = document.getElementById('start');
const reset = document.getElementById('reset');

buttonStart.addEventListener('click', function(){
    while (arrCasualNumber.length < casualNumber){
        const newNumberCasual = randomNumber(1, maxNumberInArr);
        if (arrCasualNumber.includes(newNumberCasual) == false) {
            arrCasualNumber.push(newNumberCasual);
            console.log(newNumberCasual);
            const newBox = document.createElement('div');
            newBox.classList.add('cell');
            newBox.append(newNumberCasual);
            myContainer.append(newBox)
        }
    }
})


reset.addEventListener('click', function (){
    location.reload();

})


























/*
FUNCTIONS
*/
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}