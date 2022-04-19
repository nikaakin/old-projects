

const buttons = document.querySelector('.calc-btns');
const screen = document.querySelector('.calc-screen');
const logs = document.querySelector('.log-screen');
const logBtn = document.querySelector('.title');

let total ='';
let numbers =[];
let operators =[];
let dot = 0;
let equationCount = 1;

let operatorFn = {
    '+': function (a, b) {return a + b},
    '-': function (a, b) {return a - b},
    '%': function (a, b) {return a % b},
    '/': function (a, b) {return a / b},
    '*': function (a, b) {return a * b},
}


let functions = {
    '←': function () {return total = total.slice(0, -1);},
    '=': function () { 
       if(total) numbers.push(+total);
       total ='';
       let sumHolder = 0;
       sumHolder = +numbers[0];
       
       logs.textContent += `equation ${equationCount++}: ${numbers[0]}` 
       operators.forEach( function (_, i){
           if(numbers[i+1])
               sumHolder = operatorFn[operators[i]](sumHolder, +numbers[i+1]);
               logs.textContent += ` ${operators[i]} ${numbers[i+1]} `;
       });
       logs.textContent += ` = ${sumHolder} ----- `

       operators =[];
       numbers = [];

      return sumHolder ;
    },
    'AC': function () {
        operators =[];
        numbers = [];
        return total = '';} ,
    
};

const numCheck = function (target) {
    if(target.classList.contains('num')) 
    {
    
    total += target.textContent;
    screen.textContent += target.textContent;

 }
}

const fnCheck = function (target) {
    if(target.classList.contains('functions')  && total ){
       
        numbers.push(+total);
        total ='';
        dot =0;
        operators.push(target.textContent);
        screen.textContent +=target.textContent;
    }
}

const fnCheck2 = function (target) {
    if(target.classList.contains('special')){
        
        total = functions[target.textContent]();
        screen.textContent = total;
    }
}


const dotCheck = function (target) {
    if(target.classList.contains('dot'))
    if(dot) {
        alert('not cool')
        }
    else {
        total += target.textContent;
        screen.textContent += target.textContent;
        dot++;
         }
     
}

buttons.addEventListener('click', function (e) {
    numCheck(e.target);
    fnCheck(e.target);
   fnCheck2(e.target);
   dotCheck(e.target);
})

// function displayLogs () {
//     operators.forEach( function (_, i){
//         if(numbers[i+1])
//             sumHolder = operatorFn[operators[i]](sumHolder, +numbers[i+1]);
       
//     })
    
// }

logBtn.addEventListener('click',() =>{
    logs.innerHTML = '';
    equationCount = 1;
})