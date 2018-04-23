console.log("Este es el server script");

const net = require('net');
let clients = []
let envia = (message,sender) => {
        clients.forEach( (client) => {
                if (client === sender) return;
                client.write(message);
        });
}
const server = net.createServer((c) => {
  // 'connection' listener
        console.log('client connected');

        clients.push(c);
        console.log(clients.length);

        c.on('end', () => {
                clients.splice(clients.indexOf(c),1);
                console.log('client disconnected');
                envia('bye client: now there are ' + clients.length + ' connected\r\n',1);
        });

        c.on('data', (data) => {
                envia(data,c);
        })
        envia('hello client now there are ' + clients.length + ' connected\r\n',1);
        c.pipe(c);
});

server.on('error', (err) => {
  throw err;
});

server.listen(1337, '192.168.15.21', () => {
        console.log('server bound');
        console.log(clients.length);
});
