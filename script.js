"use strict";


const INITIAL_SCORE = 20;
const MAX_NUMBER = 20;


function initData(){
    let score = 20;
    let highscore = 0;
    let numAleatorio = Math.trunc(Math.random() * 20) + 1;
}
initData();
const messageField = document.querySelector('.message')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const guessField = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')

console.log(messageField)
console.log(messageField.textContent)
console.log(score)
console.log(score.textContent)
console.log(highscore)
console.log(highscore.textContent)
console.log(numberField)
console.log(numberField.textContent)

checkBtn.addEventListener("click", checkNumber)

function checkNumber(){
    //Obtenenemos el numero pulsado
    //si no es un numero que lo corrija
    //si es un numero y no es correcto... -> comprobamos score: ¿perdemos partida?
    //actualizamos nuestras variables y el DOM
    //si es un numero y es correcto...
}