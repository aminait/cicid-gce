const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
    res.json('Hello CI/CD World');
});

app.get('/test', (req, res) => {
    res.json('Passed!');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);