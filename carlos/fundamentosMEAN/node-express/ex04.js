const express = require('express');
const app = express();
const router = express.Router();
const PORT = 3000;

router.use((req, res, next) => {
    const init = Date.now();
    next();
    console.log(`Time = ${Date.now() - init} ms.`);
});

router.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: "Computer"
    });
});

router.get('/client/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: "Carlos"
    })
});

module.exports = router;