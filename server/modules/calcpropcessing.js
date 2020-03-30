$(document).ready(init);

function init() {

console.log('Hello calcprocessing.js');
};

console.log("The answer is being calculated");



// TO DO
// create a callable function to process the given inputs with the selected naturalLangOperator
const input1 = [];
const naturalLangOperator = [];
const input2 = [];
const answer = [];

const calcDone = {
    input1: '',
    naturalLangOperator: '',
    operatorSymbol: '',
    input2: '',
    result: '',
    displayOnlyString: '',
    };


const newCalc=
    {
    input1: input1.value(),
    naturalLangOperator: naturalLangOperator.value(),
    input2: input2.value(),
    };

function fullCalcProcess () {
    newCalc.push(userInput);
    calcprocessing (newCalc);
}

function calcprocessing () {
    answer.length = 0;
    calcDone.length = 0;

    if (naturalLangOperator == "plus") {
        let result = (Number(input1) + Number(input2));
        answer.push(result);
        calcDone.push(
            {
            input1: $('input1'),
            naturalLangOperator: $('naturalLangOperator'),
            operatorSymbol: '+',
            input2: $('input2'),
            result: $('result'),
            displayOnlyString: {input1 + " " + "/" + " " + input2 +" = " + result]);
            };
        return calcDone;
    }
    else if (naturalLangOperator == "minus") {
        let result = (input1 - input2);
        answer.push(result);
        calcDone.push([input1 + " " + "/" + " " + input2 +" = " + result]);
        return calcDone;
    }
    else if (naturalLangOperator == "multiply") {
        let result = (input1 * input2);
        answer.push(result);
        calcDone.push([input1 + " " + "/" + " " + input2 +" = " + result]);
        return calcDone;
}
else if (naturalLangOperator == "divide") {
        let result = (input1 / input2);
        answer.push(result);
        calcDone.push([input1 + " " + "/" + " " + input2 +" = " + result]);
        return calcDone;
}   
else {
    console.log('A result could not be calculated');
}
}

const express = require('express');
const app = express();
app.use(express.static('server/public'));



// const calculationhistory = require('modules/calculationhistory.js');
app.post('/calculationhistory', (req, res) => {
    console.log('req:', req);
    calcDone = req.body;
    calculationhistory.push(calcDone);
    res.sendStatus(201);
});


// TESTS
// calcprocessing(6, 'plus', 2);
// console.log(`Addition Test Answer: ${answer}`); // should be "Answer: 8"
// console.log("Addition Operator Test: " + calcuse + " = " + `${answer}`); // should be "6 + 2 = 8"

// calcprocessing(6, 'minus', 2);
// console.log(`Subtraction Test Answer: ${answer}`);  // should be 4
// console.log("Subtraction Operator Test: " + calcuse + " = " + `${answer}`); // should be "6 - 2 = 4"

// calcprocessing(6, 'multiply', 2);
// console.log(`Multiplication Test Answer: ${answer}`);  // should be 12
// console.log("Multiplication Operator Test: " + calcuse + " = " + `${answer}`); //should be "6 * 2 = 12"

// calcprocessing(6, 'divide', 2);
// console.log(`Division Test Answer: ${answer}`); // should be 3
// console.log("Division Operator Test: " + calcuse + " = " + `${answer}`); // should be "6 / 2 = 3"