console.log("Hello Server");

//  PORT  //
// ********** //
const PORT = 5000;

//  EXPRESS //
// ********** //
const express = require('express');
const app = express();
app.use(express.static('server/public'));

//  BODY PARSER  //
// ********** //
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

//  SERVER ROUTES  //
// ********** //
const calculationHistory = require('modules/calculationhistory.js')
app.get('/calulationhistory', (req, res) => {
    res.send(calculationHistory);
});
app.post('/calcprocessing', (req, res) => {
    const incomingCalculation = req.body;
    incomingParameters.push(incomingCalculation);
    res.sendStatus(201);
});



app.post('/TBD', (req, res) => {
    res.send(TBD);
});

// TO DO
// -- capture and store the input (or route to a module file)
// -- create a function calcprocessing module using if/else to compute numbers using any of the following: + - * /
// -- send a computation complete indicator
// -- GET the calculated result



//  TESTING //
// ********** //
console.log(TBD);

//  RENDER  //
// ********** //





//  LISTENING //
// ********** //

app.listen(PORT, () => {
})
    console.log(`Server is running on PORT: ${PORT}`);