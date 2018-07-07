const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./ex04');

/**
 * Também é possivel utilizar expressões regulares para filtrar requests
 * (diferentes urls)
 */

app.use('/my-api', router);

app.listen(PORT, () => {
    console.log(`This NODE api is listen or PORT ${PORT}`);
})