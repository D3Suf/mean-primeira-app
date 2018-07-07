const express = require('express');
const app = express();
const PORT = 3000;

/**
 * Também é possivel utilizar expressões regulares para filtrar requests
 * (diferentes urls)
 */

app.use('/api', (req, res, next) => {
    console.log('start middlware one');
    next();
    console.log('finish');
});

app.use('/api', (req, res) => {
    res.send('<h1> Index ! </h1>');
    console.log('middleware two');
});

app.listen(PORT, () => {
    console.log(`This NODE api is listen or PORT ${PORT}`);
})