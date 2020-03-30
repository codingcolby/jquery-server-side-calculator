// REDUCE ALL THE CODE !

$(document).ready(init);

function init() {
    $('.js-submit').on('click', collectUserInput);
    // intention: clear button won't appear until after the first instance of the submit button being clicked
    // $('.userActions').append (`<button class="js-clear" name="clear">Clear</button>`)
    console.log(userInput);
    postUserInput;
}


// TO DO
// -- capture 2 input fields
// -- capture operator selection ?use buttons and pass the button name?
// -- send object to server via POST...server logic/communications not ready for this yet
// -- retrieve computational result via GET...server logic/communications not ready for this yet
// -- display all previous input/calculation results in a list via GET which updates with each new calculation

$('.js-clear').on('click', clearInput);

function clearInput() {
    $('.usernumber').val('');
};

function collectUserInput () {
    event.preventDefault();
    const userInput = {
        input1: $('input1').val(),
        naturalLangOperator: $('naturalLangOperator').name.val(),
        input2: $('input2').val(),
    };
};



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
    getTBD();
    })
    .catch((err) => {
    console.log('err');
    alert('There was an error saving route.');
});
}

function getTBD(TBD) {
    $.ajax({
        method: 'GET',
        url: '/',
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
    const pastCalculation = calculationhistory[i];

    $('.displayCalcHistory').append(`

    <li>
    
    <li>


  

    `);
    }
}
