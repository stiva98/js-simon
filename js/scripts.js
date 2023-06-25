//Generazione di 5 numeri casuali
const casualNumber = 5;
const arrCasualNumber = [];
const maxNumberInArr = 10;
while (arrCasualNumber.length < casualNumber){
    const newNumberCasual = randomNumber(1, maxNumberInArr);
    if (arrCasualNumber.includes(newNumberCasual) == false) {
        arrCasualNumber.push(newNumberCasual);
        console.log(newNumberCasual);
    }
}


























/*
FUNCTIONS
*/
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}