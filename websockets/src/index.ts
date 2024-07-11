import express from 'express';
import { WebSocketServer, WebSocket } from 'ws'; // Import WebSocket along with WebSocketServer

const app = express();
const httpServer = app.listen(8080);
let userConnected = 0;

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) { // Use WebSocket from 'ws' package
        client.send(data, { binary: isBinary });
      }
    });
  });

  console.log("User connected", ++userConnected);
  ws.send('Hello! Message From Server!!');
});

console.log('WebSocket server is running on ws://localhost:8080');
