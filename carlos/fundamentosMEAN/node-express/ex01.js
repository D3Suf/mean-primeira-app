const express = require('express');
const app = express();
const PORT = 3000;

/**
 * Também é possivel utilizar expressões regulares para filtrar requests
 * (diferentes urls)
 */

app.get('/', (req, res, next) => {
    console.log('start middlware one');
    next();
    console.log('finish');
});

app.get('/', (req, res) => {
    res.send('<h1> Index ! </h1>'); //post, put, delete, patch, all
    console.log('middleware two');
});

app.listen(PORT, () => {
    console.log(`This NODE api is listen or PORT ${PORT}`);
})