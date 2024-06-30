let num1 = undefined;
let num2 = undefined;
let op;
let opClicked = false;
/*
let adding = () => {
    console.log("adding called. num1 = " + num1 + ", num2 = " + num2);
    console.log('in add');
    num1 += num2;
    num2 = undefined;
    return num1;
}
let subtracting = () => {
    console.log("subtracting called. num1 = " + num1 + ", num2 = " + num2);
    num1 -= num2;
    num2 = undefined;
    return num1;
}
let multiplying = () => {
    console.log("multiplying called. num1 = " + num1 + ", num2 = " + num2);
    num1 *= num2;
    num2 = undefined;
    return num1;
}
let dividing = () => {
    console.log("dividing called. num1 = " + num1 + ", num2 = " + num2);
    num1 /= num2;
    num2 = undefined;
    return num1;
} */

let display = document.querySelector('#display');

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
    console.log("adding called. num1 = " + num1 + ", num2 = " + num2);
    console.log('in add');
    num1 += num2;
    num2 = undefined;
    return num1;
}};
let addMinus = {name: "subtract", symbol: "-", call() {
    console.log("subtracting called. num1 = " + num1 + ", num2 = " + num2);
    num1 -= num2;
    num2 = undefined;
    return num1;
}};
let addMultiply = {name: "multiply", symbol: "*", call() {
    console.log("multiplying called. num1 = " + num1 + ", num2 = " + num2);
    num1 *= num2;
    num2 = undefined;
    return num1;
}};
let addDivide = {name: "divide", symbol: "/", call() {
    console.log("dividing called. num1 = " + num1 + ", num2 = " + num2);
    num1 /= num2;
    num2 = undefined;
    return num1;
} };

let opsO = [
    addNum,
    addMinus,
    addMultiply,
    addDivide,
   // {name: "equal", symbol: "=", link: equal}
];

let number = document.querySelectorAll('.num');

let ops = document.querySelectorAll('.op');

let opp;

// when first numbers are clicked, store values in a.
// when operator is clicked, finish storing values in a and store operator value in mid.
// when second numbers are clicked, store values in b.
// when second operator is clicked, finish storing values in b an d store second operator in end.

for(let i = 0; i<10; i++) { //adds event listener to each individual number button
    numsA[i].addEventListener("click", () => {
        if( opClicked === true){
            display.innerHTML = "";
        }
        //console.log(i + " clicked");
        display.innerHTML += i;
        //operate(num);
        opClicked = false;
    });
}

ac.addEventListener("click", () => { //ac event listener that deletes display characters when pressed
    console.log('ac clicked');
    display.innerHTML = "";
});

ops.forEach((opp) => { //event listener for operator click. Also assigns values to num1 and num2 on click
    opp.addEventListener("click", () => {
        // console.log(opp.innerHTML + " clicked");
        opClicked = true;

        op = opp.innerHTML;
        if(num1 == undefined) {
            num1 = display.innerHTML;
            parseInt(num1);
        } else {
            num2 = display.innerHTML;
            parseInt(num2);
        }

        opsO.forEach((opp) => {
            if (opp.symbol == op){
                console.log("opp symbol = " + opp.symbol);
                if(num2 != undefined){
                    console.log("Call: " + opp.call());
                }
            }
        })
        
    });
});

document.addEventListener("click", () => { //event listener for click on document
    console.log("op = " + op);
    // console.log("op data type = " + typeof(op));
   // console.log("document clicked. num1 = " + num1 + ", num2 = " + num2);
});







