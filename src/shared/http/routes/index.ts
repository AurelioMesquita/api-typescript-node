import { Router } from "express";
import { rolesRouter } from "@roles/http/routes/roles.routes";
import { usersRouter } from "src/users/http/users.routes";
import { produtosRouter } from "src/produtos/http/routes/roles.routes";
import { clientesRouter } from "src/clientes/http/routes/roles.routes";
import { listaPedidosRouter } from "src/listaPedidos/http/routes/roles.routes";
import { formaPagamentoRouter } from "src/formaPagamento/http/routes/roles.routes";

const routes = Router();

routes.get("/", (request, response) => {
    return response.json({
        message: "Hello, welcome to my API REST!",
    });
});

routes.use("/roles", rolesRouter);
routes.use("/users", usersRouter);
routes.use("/produtos", produtosRouter);
routes.use("/clientes", clientesRouter);
routes.use("/listaPedidos", listaPedidosRouter);
routes.use("/formaPagamento", formaPagamentoRouter);
export { routes };
