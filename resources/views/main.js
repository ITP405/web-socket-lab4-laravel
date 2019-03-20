// creating a connection to the websock server from browser


// let connection = new WebSocket("ws://web-socket-node-jaejun.herokuapp.com");
// var HOST = location.origin.replace(/^http/, 'ws')
let connection = new WebSocket("ws://web-socket-node-jaejun.herokuapp.com");
connection.onopen = () => {
  console.log('connected from the frotend');
   // connection.send('hello');
};

connection.onerror = () => {
  console.log('failed to connect from the frontend');
};
connection.onmessage = (event) => {
  console.log('received message', event.data);
};
document.getElementById('editor').addEventListener('input', (event)=>{
  let text = document.getElementById('editor').innerText;
  connection.send(text);
});
