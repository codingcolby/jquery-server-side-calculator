// LOTS OF "HALF FINISHED CODE"   REDUCE ALL THE CODE !

console.log("Hello server");

//  EXPRESS //
// ********** //


// REQUIRE
const express = require('express');
const app = express();
app.use(express.static('/jquery-server-side-calculator-master'));
const bodyParser = require('body-parser');

//  PORT  //
// ********** //
const PORT = 5000;

//  BODY PARSER  //
// ********** //

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// ROUTES  //
// ********** //

app.get('calculationhistory', (req, res) => {
    res.send(calculationhistory);
});

app.post('calcprocessing', (req, res) => {
    const userInput = req.body;
    newCalc.push(userInput);
    res.sendStatus(201);
});

// app.post('/TBD', (req, res) => {
//     res.send(TBD);
// });

//  TESTING //
// ********** //
// console.log(TBD);

//  RENDER  //
// ********** //

//  LISTENING //
// ********** //
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})

// TO DO LEFTOVER NOTES
// -- capture and store the input (or route to a module file)
// -- create a function calcprocessing module using if/else to compute numbers using any of the following: + - * /
// -- send a computation complete indicator
// -- GET the calculated result