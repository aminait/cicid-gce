const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
    res.json("Don't disappoint me CI/CD World PLEASE");
});

app.get('/test', (req, res) => {
    res.json('Passed!');
});

app.get('/please', (req, res) => {
    res.json('Please...');
});

// app.get('/joke', (req, res) => {
//     res.json("What do you call a gentleman-ly server? SIR-ver");
// });

app.listen(PORT);
console.log(`Running on ${PORT}`);