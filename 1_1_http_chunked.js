let http = require("http")


let server = http.createServer((req, res) => {
    //console.log("request received");
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello\n");
    setTimeout(() => {
        res.end("World\n");
    }, 2000);
    //console.log("request completed");
});


server.listen(8000);

/*
    - semantics:
        "Hello" is returned to the client
            Then 2 seconds later "World" is returned

        NB: in between the 2 seconds, the server can still receive and process requests 
                because it idles but does NOT sleep(Dahl, 2011).
            example:
                `ab -n 100 -c 100 http://127.0.0.1:8000/`
                all the requests are handled in ~2 seconds, because there is no waiting.
                if thre was:
                each subsequent request-response cycle would be 2 seconds later:
                    i.e. 1st one = 2 seconds
                            2nd one = 4 seconds
                            3rd one = 6 seconds

        implication: node handles concurrency very well
                because it never sleeps, it can always handle another connection (Dahl, 2011).

                this means it generally performs better than a traditional webserver
                especially under high concurrency loads

        application:
            can be used to implement highly web servers (Dahl, 2011).
    - client receiption of responses:
        HTTP 1.1. handles informing the client when the response is complete:
            That's the reason for the 'Transfer-Encoding: chunked' header (Dahl, 2011)
        
*/

/*
    test:
        curl -i http://localhost:8000

*/

/*
References:
    Dahl, R. Introduction to Node.js with Ryan Dahl. 2011. https://www.youtube.com/watch?v=jo_B4LTHi3I
*/