import express from "express";
const { v4: uuidv4 } = require('uuid')

const server = express();

server.use(express.json())

const projects: any = []

server.use(logRoutes)
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

server.put("/projects/:id", (request, response) => {
    const { id } = request.params;
    const { name, owner } = request.body;

    const projectIndex = projects.findIndex((p: any) => p.id === id);
    if (projectIndex < 0) return response.status(404).json({ error: 'Project not found' });
    if (!name || !owner) return response.status(400).json({ error: 'Name and Ower are required' })

    const project = {
        id, name, owner
    }
    projects[projectIndex] = project
    return response.json(project)
})
server.delete("/projects/:id", (request, response) => {
    const { id } = request.params;
    const projectIndex = projects.findIndex((p: any) => p.id === id);
    if (projectIndex < 0) return response.status(404).json({ error: 'Project not found' });

    projects.splice(projectIndex, 1)
    return response.status(204).send()
})

function logRoutes(request: any, response: any, next: any) {
    const { method, url } = request;
    const route = `[${method.toUpperCase()}] ${url}`
    console.log(route)
    return next()
}
export default server;