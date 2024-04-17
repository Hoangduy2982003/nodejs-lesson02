import http from "http";
import {tasks} from "./data.js";
// import { url } from "inspector";

const server = http.createServer();

// server.on("request" , (req, res) => {
//     console.log("Handle request: ",{
//         url: req.url,
//         method: req.method,
//         body:req.body
//     });

//     const url = req.url;

//     if(url === "/redirect/gg"){
//         res.writeHead(301,{
//             location:"https://google.com"
//         });
//     }

//     res.end("Hello NodeJS");
// });

server.on("request" , async (req, res) =>{
    //Đường dẫn client request lên
    const url = req.url;
    //HTTP method : GET , POST , PUT , ...
    const method = req.method;

    switch(url){
        case "/tasks":
            if(method === "GET"){
                //Xử lý trả về danh sách task
                res.setHeader("Content-Type" , "application/json");
                res.writeHead(200);
                res.end(JSON.stringify(tasks));
            }
            break;
        default : 
            res.writeHead(404);
            res.end();
    }
})

server.listen(3000, () =>{
    console.log("Server is running on port 3000");
});