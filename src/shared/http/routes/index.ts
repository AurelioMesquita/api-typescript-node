import { Router } from "express";
import { rolesRouter } from "@roles/http/routes/roles.routes";
import { usersRouter } from "src/users/http/users.routes";
import { produtosRouter } from "src/produtos/http/routes/roles.routes";

const routes = Router();

routes.get("/", (request, response) => {
    return response.json({
        message: "Hello, welcome to my API REST!",
    });
});

routes.use("/roles", rolesRouter);
routes.use("/users", usersRouter);
routes.use("/produtos", produtosRouter);
export { routes };
