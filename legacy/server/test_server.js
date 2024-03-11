let http = require("http");

let server = http.createServer((req, res) => {
    console.log("I got a request");
    for (i = 0; i < 100000; i++) {
        for (j = 0; j < 100000; j++) {
            i * j
        }
    }
    res.end("done");
});

console.log("starting server");
server.listen(8000)
console.log("server listening");
