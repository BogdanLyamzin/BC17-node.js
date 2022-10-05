const {Server} = require("socket.io");
const {createServer} = require("http");

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket)=> {
    // console.log("New connect from frontend");
    socket.on("chat-message", (msg)=> {
        socket.broadcast.emit("chat-message", msg)
    })
})

httpServer.listen(5000)