const express = require('express');
const app = express();
const PORT = 3000;


app.route('/client')
    .get((req, res) => res.send('get clients list'))
    .post((req, res) => res.send('create new client'))
    .put((req, res) => res.send('update client or create new client'))
    .delete((req, res) => res.send('delete client'))
    .patch((req, res) => res.send('update client'))

app.listen(PORT, () => {
    console.log(`This NODE api is listen or PORT ${PORT}`);
})