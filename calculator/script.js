

const buttons = document.querySelector('.calc-btns');
const screen = document.querySelector('.calc-screen');
const logs = document.querySelector('.log-screen');
const logBtn = document.querySelector('.title');

let total ='';
let numbers =[];
let operators =[];

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
       operators.forEach( function (n, i){
           if(numbers[i+1])
               sumHolder += operatorFn[operators[i]](numbers[i], numbers[i+1]);
           
       });
       operators =[];
       numbers = [];
        sumHolder;
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


buttons.addEventListener('click', function (e) {
    numCheck(e.target);
    fnCheck(e.target);
   fnCheck2(e.target);
})

logBtn.addEventListener('click', () => {
    logs.innerHTML = `Numbers: ${numbers}. <br>
    Operators: ${operators}. `
})