import { AppError } from "./../../errors/AppError";
import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
    throw new AppError("Acesso Negado");
    return response.json({
        message: "Hello, welcome to my API REST!",
    });
});

export { routes };
