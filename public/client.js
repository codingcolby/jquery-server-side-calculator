$(document).ready(init);

function init() {
    console.log("Hello Client");
    $('.js-TBD').on('click', someFunction);

    getTBD();
}

// TO DO
// -- capture 2 input fields
// -- capture operator selection
// -- bundle as object
// -- send object to server via POST
// -- retrieve computational result via GET
// -- display all  previous input/calculation results in a list via GET which updates with each new calculation




// AJAX
// **********
function postTBD(TBD) {
    $.ajax({
        method: 'POST',
        url: '/route',
        data: TBD,
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
function render(TBD) {
    console.log('Render in browser');
    $('.js-TBD').empty();

    for (let i = 0; i < someArray.length; i++) {
    const someThing = someArray[i];

    $('.js-').append(`
        <p><strong>${someThing.name}:</strong> ${someThing.description}</p>
    `);
    }
}
