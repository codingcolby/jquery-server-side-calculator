$(document).ready(init);

function init() {
    console.log("Hello Client");
    $('.js-TBD').on('click', someFunction);

    getTBD();
}

function getTBD() {
$.ajax({
    method: 'GET',
    url: '/route',
})
.then((response) => {
    render(response);
})
.catch((err) => {
    console.log('err');
    alert('There was an error finding route.');
});
}

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
