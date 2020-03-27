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
app.get('/TBD', (req, res) => {
    res.send(TBD);
});

app.post('/TBD', (req, res) => {
    res.send(TBD);
});


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