let num1 = undefined;
let num2 = undefined;
let op;
let opClicked = false;

let op1 = undefined;
let op2 = undefined;

let display = document.querySelector('#display');

let opDiv = document.querySelector('#opDiv');

let ac = document.querySelector("#ac");
let sign = document.querySelector("#sign");
let percent = document.querySelector("#percent");
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract')
let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');
let equal = document.querySelector('#equal');
let point = document.querySelector('#point');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');

let numsA = [zero, one, two, three, four, five, six, seven, eight, nine];
let opsA = [add, subtract, divide, multiply, equal];

let addNum = {name: "add", symbol: "+", call() {
    console.log("addNum called. num1 = " + num1 + ", num2 = " + num2);
    console.log('in add');
    num1 = num1 + num2;
    num2 = undefined;
    return num1;
}};
let minusNum = {name: "subtract", symbol: "-", call() {
    console.log("subtractNum called. num1 = " + num1 + ", num2 = " + num2);
    num1 = num1 - num2;
    num2 = undefined;
    return num1;
}};
let multiplyNum = {name: "multiply", symbol: "*", call() {
    console.log("multiplyNum called. num1 = " + num1 + ", num2 = " + num2);
    num1 = num1 * num2;
    num2 = undefined;
    return num1;
}};
let divideNum = {name: "divide", symbol: "/", call() {
    console.log("divideNum called. num1 = " + num1 + ", num2 = " + num2);
    num1 = num1 / num2;
    num2 = undefined;
    return num1;
}};

let equalNum = {name: "equal", symbol: "=", call() {
    console.log("equalNum called. num1 = " + num1 + ", num2 = " + num2);
    return 404;
}};

// when equal is clicked, set num1 and num2
//if number is clicked after equal is clicked, set num1 equal to the number and num2 as undefined, and set op1 and op2 to undefined
//if op is clicked after equal is clicked, continue like other ops

let opsO = [
    addNum,
    minusNum,
    multiplyNum,
    divideNum,
    equalNum
];

let number = document.querySelectorAll('.num');

let ops = document.querySelectorAll('.op');

let opp;


//sets initial value of display to 0
display.innerHTML = '0';




for(let i = 0; i<10; i++) { //adds event listener to each individual number button
    numsA[i].addEventListener("click", () => {
        if( opClicked === true){
            display.innerHTML = "0"; // COME BACK TO THIS
            if (op1 == "="){
               op2 = undefined;
               // num2 = undefined;
            }
        }
        if (display.innerHTML == '0'){
            display.innerHTML = "";
        } 

        display.innerHTML += i; //add num to display
        opClicked = false;
    });
}

ac.addEventListener("click", () => { //ac event listener that deletes display characters when pressed
    console.log('ac clicked');
    display.innerHTML = "0";
    num1 = undefined;
    num2 = undefined; 
    op1 = undefined;
    op2 = undefined; 
    //ADD OP1 and OP2 ????
});

/////////////////////////////////////////////////////////////////////////

// 1)
//  A) When equal is pressed, 

ops.forEach((opp) => { //event listener for operator click. Also assigns values to num1 and num2 on click
    opp.addEventListener("click", () => {
        // console.log(opp.innerHTML + " clicked");
        opClicked = true;

        if(num1 == undefined || op1 == '=') { //setting num1 and num2
            num1 = display.innerHTML;
            num1 = parseInt(num1);
        } else {
            num2 = display.innerHTML;
            num2 = parseInt(num2);
        }

        if(op1 === undefined || op1 == '='){
            op1 = opp.innerHTML;
        } else {
            op2 = opp.innerHTML;
        }

        opsO.forEach((opp) => {
            if (opp.symbol == op1){
                if(num2 != undefined && op2 != undefined){
                    let call = opp.call();
                    console.log("Call: " + call);
                    display.innerHTML = call;

                    op1 = op2;
                    op2 = undefined;
                }
            }
        });
        
    });
});

//console.log('cold call to ops[0] = ' + addNum.call());

if(opClicked == true){
    opDiv.style.backgroundColor = "green";
} 






