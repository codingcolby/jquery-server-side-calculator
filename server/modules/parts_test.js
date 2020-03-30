// sample data

const answer = [];
const calcDone = {
    input1: '',
    naturalLangOperator: '',
    operatorSymbol: '',
    input2: '',
    result: '',
    displayOnlyString: '',
    };

// newCalc is what should be POSTed to calprocessing from the client.js
const newCalc=
    {
    input1: 8,
    naturalLangOperator: 'plus',
    input2: 6,
    };


    function calcprocessing (newCalc) {
        answer.length = 0;
        calcDone.length = 0;

        if (naturalLangOperator == "plus") {
            let result = (Number(input1) + Number(input2));
            answer.push(result);
            calcDone.push(
                {
                input1: $(input1),
                naturalLangOperator: $('naturalLangOperator'),
                operatorSymbol: '+',
                input2: $('input2'),
                result: $('result'),
                displayOnlyString: (input1 + " " + "+" + " " + input2 + " = " + result),
                });
            return calcDone;
        }
        else {
            console.log('Nope, try again')
        };
    };