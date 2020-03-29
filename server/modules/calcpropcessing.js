console.log('Hello calcprocessing.js');

// TO DO
// create a callable function to process the given inputs with the selected operator
const answer = [];

function calcprocessing (input1, operator, input2) {
    if (operator === "+") {
        let result = (Number(input1) + Number(input2));
        answer.push(result);
    }
    else if (operator == "-") {
        let result = (input1 - input2);
        answer.push(result);
    }
    else if (operator == "*") {
        let result = (input1 * input2);
        answer.push(result);
    }
    else if (operator == "/") {
        let result = (input1 / input2);
        answer.push(result);
    }
    else {
        console.log('A result could not be calculated');
    }
}

// TESTS
// calcprocessing('6', '+', '2');
// console.log(answer); // should be 8

// calcprocessing('6', '-', '2');
// console.log(answer); // should be 4

// calcprocessing('6', '*', '2');
// console.log(answer); // should be 12

// calcprocessing('6', '/', '2');
// console.log(answer); // should be 3
