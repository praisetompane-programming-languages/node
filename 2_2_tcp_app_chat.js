let tcp = require("net")

let sockets = [];

let server =  tcp.createServer((socket) => {
    sockets.push(socket); //register socket(i.e. connected person/client)

    socket.on("data", (data) => {
        //broadcast to everyone connected to server(i.e. every socket)
        for(let i = 0; i < sockets.length; i++){
            if(sockets[i] == socket) continue; //do not broadcast to self
            sockets[i].write(data);
        }
    });

    //clean up disconnected sockets
    socket.on("end", () => {
        let disconnected_socket_index = sockets.indexOf(socket);
        sockets.splice(disconnected_socket_index, 1);
    }
) ;
});

server.listen(8000);

/*
    test:
        nc localhost 8000 // first_client
        nc localhost 8000 // second_client

        on first_client
            input = hello
            output: none
        on second_client
            output = hello
        
*/

/*
References:
    Dahl, R. Introduction to Node.js with Ryan Dahl. 2011. https://www.youtube.com/watch?v=jo_B4LTHi3I
*/