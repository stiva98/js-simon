//Generazione di 5 numeri casuali
const casualNumber = 5;
const arrCasualNumber = [];
const maxNumberInArr = 10;
const myContainer = document.querySelector('.container');
const buttonStart = document.getElementById('start');
const reset = document.getElementById('reset');
let arrPrompt = [];
const total = document.querySelector('.score-now');

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
    setTimeout(
    myTimer, 
    30000);
    setTimeout(
    timeOut, 
    30100);
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
function myTimer() {
    const newBoxNone = document.querySelectorAll('.cell');
    for(let i = 0; i < newBoxNone.length; i++){
        newBoxNone[i].classList.add('cell-2');
    }
}
function timeOut() {
    const answers1 = prompt('inserisci il primo numero');
    const answers2 = prompt('inserisci il secondo numero');
    const answers3 = prompt('inserisci il terzo numero');
    const answers4 = prompt('inserisci il quarto numero');
    const answers5 = prompt('inserisci il quinto numero');
    
    const promptBox = document.querySelectorAll('.cell-prompt');
    arrPrompt = [answers1, answers2, answers3, answers4, answers5]
    for(let i = 0; i < promptBox.length; i++){
        const element = promptBox[i];
        for(let j = 0; j < arrPrompt.length; j++){
            element.innerHTML = arrPrompt[i];
        }
    }
    const newBoxNone = document.querySelectorAll('.cell');
    for(let i = 0; i < newBoxNone.length; i++){
        newBoxNone[i].classList.remove('cell-2');
    }
    score ();
}
function score () {
    let result = 0
    for(let i = 0; i < arrCasualNumber.length; i++){
        if(arrCasualNumber[i] == arrPrompt[i]){
            result++;
        }
    }
    total.innerHTML = 'Il tuo score: ' + result;
}