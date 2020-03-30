// LOTS OF "HALF FINISHED CODE"   REDUCE ALL THE CODE !

$(document).ready(init);

function init() {
    $('.js-submit').on('click', submit);
    console.log('Time to number crunch!');
    getcalculationhistory();
}

// FIX, ALSO INPUT FIELDS SHOULD NOT CLEAR ON SUBMIT BUT THEY ARE
function submit() {
    $('.js-submit').on('click', collectUserInput);
    event.preventDefault();
    console.log(userInput);
    postUserInput;
    $('.result').append(`
    <p> Result: ${calcprocessing.answer}
    </p>
    `);
    getHistory();
    render();
}

// THIS IS WORKING
$('.js-clear').on('click', clearInput);
function clearInput() {
    $('.input1').val('');
    $('.input2').val('');
};

// CHECK SYNTAX
function collectUserInput () {
    event.preventDefault();
    const userInput = {
        input1: $(input1).val(),
// CAN THE NAME BE PASSED? THE OPERATOR - EVEN IN QUOTES GIVES AND ERROR. CAN INFORMATION BE PASSED BASED ON A BUTTON TOGGLE?
        naturalLangOperator: $(naturalLangOperator.name).val(),
        input2: $(input2).val(),
    };
};

// FIX THIS - NEED MORE REVIEW ON TOPIC
// AJAX
// **********
function postUserInput(userInput) {
    $.ajax({
        method: 'POST',
        url: '/calcprocessing',
        data: userInput.body,
    })
    .then((response) => {
    console.log(response);
    get($(answer));
    })
    .catch((err) => {
    console.log('err');
    alert('There was an error saving route.');
});
}

function getcalculationhistory() {
    $.ajax({
        method: 'GET',
        url: '/server/modules/calculationhistory',
    })
    .then((response) => {
        render(response);
    })
    .catch((err) => {
        console.log('err');
        alert('There was an error finding route.');
    });
    }


// DOM RENDER
// **********
function render(calculationhistory) {
    console.log('Calculations for this server session');
    $('.displayCalcHistory').empty();

    for (let i = 0; i < calculationhistory.length; i++) {
    const pastCalculations = calculationhistory[i];

    $('.displayCalcHistory').append(`
    <li>
    ${pastCalculations.displayOnlyString}
    </li>
    `);
    }
}

// TO DO - LEFTOVER NOTES
// -- capture 2 input fields
// -- capture operator selection ?use buttons and pass the button name?
// -- send object to server via POST...server logic/communications not ready for this yet
// -- retrieve computational result via GET...server logic/communications not ready for this yet
// -- display all previous input/calculation results in a list via GET which updates with each new calculation