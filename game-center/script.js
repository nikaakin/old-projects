"use strict"
// all games are imported here
import {minesweeper} from './Games-c/Minesweeper/minesweeper.js'


// selectors
const container = document.querySelector('.container');
const nameClick = document.querySelectorAll('.contact-info');

// game identifier
let gameNumber;

// game load helper (switch)
let gameLoad = {
    "0": function () {minesweeper([8,8,10,54]);},
    "1": function () {},
 }
 
// game display for user to choose from
nameClick.forEach(el => el.addEventListener('click', (e) => {
    container.innerHTML = '';
    if(e.target.classList.contains('C'))
     {   container.insertAdjacentHTML( "afterbegin",
     `<span class="span">You Can Currently Play Following Games: <br> </span>
     <a href="#" class="game-links" data-set=0>Minesweeper</a>`);}
    else{
        container.insertAdjacentHTML("afterbegin",
         `<span class="span">You Can Currently Play Following Games: <br> </span>
        <a a href="#" class="game-links" data-set=1>tic tac toe</a>`) 
    }

}))

// chosen game imported
container.addEventListener('click', (e) => {
    if(!e.target.classList.contains('game-links'))
    return;
    gameNumber = e.target.dataset.set;
    gameLoad[gameNumber]();
})


