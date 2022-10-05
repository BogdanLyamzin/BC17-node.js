const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=> {
    // console.log("New connect from frontend");
    clients.push(newClient);
    setTimeout(() => {
        newClient.send("Welcome to chat")
    }, 3000);

    clients.forEach(client => {
        if(client !== newClient) {
            client.send("New client connect")
        }
    })
})
