const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('<h1> I guess its better use Express Framework, no? </h1>');
});

const port = 3456;
server.listen(port, function () {
    console.log(`Listen on ${port}`);
});