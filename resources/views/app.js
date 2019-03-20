let WebSocket = require('ws');

let wss = new WebSocket.Server({port: process.env.PORT || 8080}) //web socket server

wss.on('connection', (ws) =>{
  ws.on('message', (message) =>{
    console.log(`Received: ${message}`);
    wss.clients.forEach((client)=> {
      client.send(message);
    });
  });
});
