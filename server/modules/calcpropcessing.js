console.log('Hello calcprocessing.js');

// TO DO
// create a callable function to process the given inputs with the selected naturalLangOperator


const answer = [];
const calcuse = [];

function calcprocessing (input1, naturalLangOperator, input2) {
    answer.length = 0;
    calcuse.length = 0;

    if (naturalLangOperator == "plus") {
        let result = (Number(input1) + Number(input2));
        answer.push(result);
        calcuse.push([input1 + " " + "+" + " " + input2 +" = " + result]);
        return true;
    }
    else if (naturalLangOperator == "minus") {
        let result = (input1 - input2);
        answer.push(result);
        calcuse.push([input1 + " " + "+" + " " + input2 +" = " + result]);
        return true;
    }
    else if (naturalLangOperator == "multiply") {
        let result = (input1 * input2);
        answer.push(result);
        calcuse.push([input1 + " " + "+" + " " + input2 +" = " + result]);
        return true;
}
else if (naturalLangOperator == "divide") {
        let result = (input1 / input2);
        answer.push(result);
        calcuse.push([input1 + " " + "+" + " " + input2 +" = " + result]);
        return true;
}
else {
    console.log('A result could not be calculated');
}
}

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