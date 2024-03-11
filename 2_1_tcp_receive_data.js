let tcp = require("net")

let server =  tcp.createServer((socket) => {
    socket.write("Hello\n");
    socket.write("World\n");

    socket.on("data", (data) => {
        
        socket.write("data received: " + data);
    })
});

server.listen(8000);

/*
    test:
        nc localhost 8000
        first output:
            Hello
            World
        input: aaaa
        output: data received:aaaa
*/

/*
References:
    Dahl, R. Introduction to Node.js with Ryan Dahl. 2011. https://www.youtube.com/watch?v=jo_B4LTHi3I
*/