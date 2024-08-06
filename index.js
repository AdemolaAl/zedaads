const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser'); // Adding body-parser middleware
const app = express();
const PORT = 3000;

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/pictures', express.static(process.cwd() + '/pictures'));

// Adding middleware for parsing JSON bodies
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Connection', 'keep-alive');
    next();
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});



//app.use(favicon(__dirname + '/public/favicon.ico'));

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
});
