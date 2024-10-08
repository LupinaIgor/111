/**
 * Create socket server
 */
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io =
    new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });


// Обработка подключения клиента
io.on("connection",
    (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Cooбщить всем, что кто-то открыл страницу
        io.emit('new_user_connection', {socket_id: socket.id})



        // Обработка сообщения от клиента
        socket.on('new_message', (data) =>{
            io.emit('new_message', data);
        })




        // // обработка события 'message'
        // socket.on("message", (msg) =>{
        //     console.log('Message received:' ${msg} );
        //
        //     //отправка сообщения всем клиентам
        //     io.emit("message", msg);
        // });


        // обработка oтключения клиента
        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);

        });

    });

/**
 * Run socket server
 */
httpServer.listen(3030, () => {
    console.log("Socket server is running on http://localhost:3030");
});
