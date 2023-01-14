import express from "express";
const { v4: uuidv4 } = require('uuid')

const server = express();

server.use(express.json())

const projects: any = []

server.get("/", (request, response) => {
    return response.send("Hello, welcome to my API REST!");
});

server.get("/projects", (request, response) => {
    return response.json(projects)
});

server.post("/projects/", (request, response) => {
    const { name, owner } = request.body
    const project = {
        id: uuidv4(),
        name,
        owner
    }
    projects.push(project)
    return response.status(201).json(project)
});

export default server;