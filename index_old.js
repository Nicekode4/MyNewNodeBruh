import http from 'http';
import express from 'express';
const app = express();

    app.use((req, res, next) => {
    res.status(404).send("Siden blev ikke fundet")
})
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h2>I'm a teapot</h2>");
    response.end();
}).listen(4000, () => {
    console.log("Server kører på http://localhost:4000/");
    

})