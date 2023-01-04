import express from "express";

const server = express();

server.get("/", (request, response) => {
    return response.send("Hello, welcome to my API REST!");
});

export default server;