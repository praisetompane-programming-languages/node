let tcp = require("net")

let server =  tcp.createServer((socket) => {
    socket.write("Hello\n");
    socket.end("World\n");
});

server.listen(8000);

/*
    test:
        telnet localhost 8000
*/

/*
References:
    Dahl, R. Introduction to Node.js with Ryan Dahl. 2011. https://www.youtube.com/watch?v=jo_B4LTHi3I
*/