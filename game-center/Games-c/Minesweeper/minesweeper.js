"use strict"



const minesweeper = function (levelDefault) {
//selectors --------------------------------------------------
const container = document.querySelector('.container');
const main = document.querySelector('.main');
// variables -----------------------------------------------
const level = this || levelDefault;
let mineRemain = level[2];
let gameOver = 0;
let interval;
let withoutMines = level[3];
let levelDif;
// gameLevel object ----------------------------------------------
const gameLevels = {
  // [squares horizontally, squares vertically, mines, mine-free squares]
  '0' : [8, 8, 10, 54],
  '1' : [13, 15, 40, 155],
  '2' : [16, 20, 70, 250],
}


// functions ---------------------------------------------------------
const ticks = function () {
  
  if(gameOver) {
  clearInterval(interval);
  return;
}
else{
  let tick = 0;
  interval = setInterval(()=>{
    clock.textContent = `${`${Math.trunc(tick/60)}`.padStart(2, '0')}:${`${tick%60}`.padStart(2, '0')}`;
    tick++;
  }, 1000)
  }
};

// create graph with mine counts around adjacent squares
const createGraph = function (squares, mines) {
  // create NxN matrix
  let arr = new Array(level[0]);
  for(let i = 0; i < level[0]; i++){
    arr[i] = new Array(level[1]).fill(0);
  }
  // adding mines
  mines.forEach(i => {
    let curX = Math.trunc(i/level[1]);
    let curY = i%level[1];
    arr[curX][curY] = 1000;
  });

  // count adjacent squares to mines
  mines.forEach(i => {
    let curX = Math.trunc(i/level[1]);
    let curY = i%level[1];
    for(let j= curX-1; j< curX+2;j++){
        if(j >= 0 && j<level[0]){
      for(let k= curY-1; k< curY+2;k++){
          if(k >= 0 && k<level[1])
          {  arr[j][k] +=1;}
        }
      
      }
    }
  });
  //fill html with results
  squares.forEach((el, i) => el.dataset.mines = arr[Math.trunc(i/level[1])][i%level[1]] );
  // !!!
  return arr;
}
  // opening adjacent empty squares and their adjacent square
const openAdjacentEmpties = function (target, arr, squares) {

  let queue =[target.dataset.id];
  let curTarget;
  while (queue.length){

    curTarget = queue.pop();
    
    let curX = Math.trunc(curTarget / level[1]);
    let curY = curTarget % level[1];
    
    for(let j= curX-1; j< curX+2;j++){
      if(j >= 0 && j<level[0]){
        for(let k= curY-1; k< curY+2;k++){
          if(k >= 0 && k<level[1])
          {  if(arr[j][k] === 0  && squares[(j * level[1])+k].dataset.visited !== 'true' ){
            queue.push((j*level[1])+k);
            --withoutMines;
            squares[(j * level[1])+k].dataset.visited = 'true';
            squares[(j * level[1])+k].classList.add('minesweeper-clicked');
            squares[(j * level[1])+k].classList.remove('minesweeper-flagged');}
            // arr[j][k] < 1000 check is not neccessary because
            // only 0s are pushed to queue so this loop will never encounter mine
            // it will only encounter 0s and anything under 1000.
            else if(arr[j][k] !== 0){
            
              if(squares[(j * level[1])+k].dataset.visited !== "true") --withoutMines;
              squares[(j * level[1])+k].dataset.visited = 'true';
              squares[(j * level[1])+k].classList.add('minesweeper-clicked');
              squares[(j * level[1])+k].textContent = squares[(j * level[1])+k].dataset.mines;
              squares[(j * level[1])+k].classList.remove('minesweeper-flagged');
            }
            }
           
          }
        
        }
      }

  }
}


// event functions -------------------------------------------------------
const clickSqaure = function (e) {
  const curMine = e.target;
  if(e.target.classList.contains('minesweeper-flagged')) return;
  if(curMine.dataset.mines >= 1000){
    container.querySelector('.minesweeper-title--count').textContent = `You've Lost`;
    gameOver++;
    ticks();
    // container.innerHTML = '';
   }
   if(curMine.dataset.mines == "0"){
    openAdjacentEmpties(e.target, arr, squares);
  }
  if(curMine.dataset.mines > 0 && curMine.dataset.mines < 1000 ){
    if(curMine.dataset.visited !== "true") --withoutMines;
    curMine.dataset.visited = 'true';
    
    curMine.classList.add('minesweeper-clicked');
    curMine.textContent = curMine.dataset.mines;
  }
}

const game = function (e) {
    if(e.target.closest('.minesweeper-level-wrapper')) return;
    if(!withoutMines) {
      gameOver++;
      ticks();
      container.querySelector('.minesweeper-title--count').textContent = `You've Won`;
    }
    if(gameOver) return;
  if(flag.classList.contains('minesweeper-flag-clicked')){
    if(e.target.classList.contains('minesweeper-flagged')){
        e.target.classList.remove('minesweeper-flagged');
        titleCount.textContent = `There Are ${++mineRemain} Mines Remaining`;
    }
    else if(!e.target.classList.contains('minesweeper-flagged') && e.target !== flag) {
        e.target.classList.add('minesweeper-flagged');
        titleCount.textContent = `There Are ${--mineRemain} Mines Remaining`;
    }
  }
  else if (!flag.classList.contains('minesweeper-flag-clicked')){
    clickSqaure(e); 
  }

}

//reset environment
  container.innerHTML ='';

// making board (HTML/CSS side)
  
  container.insertAdjacentHTML("afterbegin",`<div class="minesweeper-grid"></div>`);
  container.insertAdjacentHTML("afterbegin", `<div class="minesweeper-title">
  <div class="minesweeper-title--name">Minesweeper</div>
  <div class="minesweeper-title--wrapper">
  <span class="minesweeper-title--clock">00:00</span>
  <span class="minesweeper-title--count">There Are ${mineRemain} Mines Remaining</span>
  <img src="Games-c/pictures/flag.png" class="minesweeper-title--flag"></img>
  </div>
  </div>`);

container.insertAdjacentHTML("beforeend", 
  `<div class="minesweeper-level-wrapper" style="height:${window.innerHeight/15}px">
  <button class="minesweeper-game-level" data-num ="0">8x8 board with 10 mines  </button> 
  <button class="minesweeper-game-level" data-num ="1">13x15 board with 40 mines  </button>
  <button class="minesweeper-game-level" data-num ="2">16x20 board with 70 mines   </button>
  </div>
  `);

  // newly made element's selectors ----------------------------------------------------

  const gameLevel = container.querySelector('.minesweeper-level-wrapper');
  const clock = container.querySelector('.minesweeper-title--clock');
  const grid = container.querySelector('.minesweeper-grid');
  const flag = container.querySelector('.minesweeper-title--flag');
  const titleCount = container.querySelector('.minesweeper-title--count');

  //making right size board (   grid-template-columns: repeat(var(--var), 1fr) )
  grid.style.setProperty("--var", level[1]);

  // prepare variables for filling board

  let mines = new Array();
  let filter =new Set();

  while(filter.size < level[2]){
  filter.add(Math.trunc(Math.random()*(level[0]*level[1])));
  }
  mines =[...filter];

  for (let i=0; i<(level[0]*level[1]); i++){
  grid.insertAdjacentHTML('beforeend',
   `<div class="minesweeper-square" style="height:${(window.innerHeight*0.8)/level[0]}px" data-id="${i}"></div>`);
  };

  const squares = [...grid.querySelectorAll('.minesweeper-square')];


  //create matrix
   const arr = createGraph(squares, mines);
  //turn on timer
   ticks();
  
//Events ------------------------------------------------------
  
  flag.addEventListener("click", () => {
    if(gameOver) return;
    flag.classList.toggle('minesweeper-flag-clicked');
  });

  container.addEventListener('click', game.bind());
    
  gameLevel.addEventListener('click', (e) => {
    levelDif = gameLevels[e.target.dataset.num];
    withoutMines = levelDif[3];
    gameLevel.remove();
    gameOver++;
    (minesweeper.bind(levelDif))();
  });
    
    
  //exit function if game is over
   if(gameOver) return;

}



export {minesweeper};
