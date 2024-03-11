import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.net.InetSocketAddress;

public class SimpleHTTPServer {
    public static void main(String[] args) {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0)
        server.createContext("/", new Handler());
    }
}

static class Handler implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        for (int i = 0; i < 100000; i++) {
            for (int j = 0; j < 100000; j++) {
                int result = i * j;
            }
        }
    }
}