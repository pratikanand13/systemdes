"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws"); // Import WebSocket along with WebSocketServer
const app = (0, express_1.default)();
const httpServer = app.listen(8080);
let userConnected = 0;
const wss = new ws_1.WebSocketServer({ server: httpServer });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === ws_1.WebSocket.OPEN) { // Use WebSocket from 'ws' package
                client.send(data, { binary: isBinary });
            }
        });
    });
    console.log("User connected", ++userConnected);
    ws.send('Hello! Message From Server!!');
});
console.log('WebSocket server is running on ws://localhost:8080');
