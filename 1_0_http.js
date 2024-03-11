let http = require("http")

// user: call to createServer executed everytime a request comes into received on the server
// NB: not everytime a connecetion is made to the server
let server = http.createServer((req, res) => {
    console.log("request received");
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Hello World"); // response body
    console.log("request complted");
});

server.listen(8000)

/* added default headers:
    Keep-Alive: timeout=5 = persistent connection to the server. the TCP connnection stays alive and is reused.
    Transfer-Encoding: chunked =  used to enable variable length responses
        used for streaming. node returns values from downstream server immediately it receives it,
            it does not buffer the results in the server memory

*/

/*
References:
    Dahl, R. Introduction to Node.js with Ryan Dahl. 2011. https://www.youtube.com/watch?v=jo_B4LTHi3I
*/