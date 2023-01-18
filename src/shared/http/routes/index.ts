import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
    return response.send("Hello, welcome to my API REST!");
});

export { routes };
