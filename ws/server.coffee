const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });

function heartbeat() {
  console.log('heart beat----->');
  this.isAlive = true;
}

wss.on('connection', function connection(ws) {
  ws.isAlive = true;
  ws.on('pong', heartbeat);

  ws.on('message', function(msg) {
    console.log('message from client--->', msg);
  })
});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    console.log('ws alive?-->', ws.isAlive);
    if (ws.isAlive === false) {
      console.log('ws is not alive');
      return ws.terminate();
    }

    ws.isAlive = false;
    ws.ping('', false, true);
  });
}, 3000);