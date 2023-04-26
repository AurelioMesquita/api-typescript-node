import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { container } from "tsyringe";
import { isAuthenticated } from "@shared/http/middlewares/isAuthenticated";
import { CreateListaPedidosController } from "src/listaPedidos/useCases/createListaPedidos/createListaPedidosController";
import { ListListaPedidosController } from "src/listaPedidos/useCases/listListaPedidos/listListaPedidosController";
import { UpdateListaPedidosController } from "src/listaPedidos/useCases/updateListaPedidos/updateListaPedidosController";
import { ShowListaPedidoController } from "src/listaPedidos/useCases/showListaPedidos/showListaPedidosController";
import { DeleteListaPedidosController } from "src/listaPedidos/useCases/deleteListaPedidos/deleteListaPedidosController";

const listaPedidosRouter = Router();
const createlistaPedidosController = container.resolve(
    CreateListaPedidosController,
);
const listlistaPedidosController = container.resolve(
    ListListaPedidosController,
);
const showlistaPedidosController = container.resolve(ShowListaPedidoController);
const updatelistaPedidosController = container.resolve(
    UpdateListaPedidosController,
);
const deletelistaPedidosController = container.resolve(
    DeleteListaPedidosController,
);
listaPedidosRouter.use(isAuthenticated);

listaPedidosRouter.post(
    "/",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            produto: Joi.string().required(),
            quantidade: Joi.number(),
            sn_catalogo: Joi.boolean(),
            pagina_catalogo: Joi.number(),
        }),
    }),
    (request, response) => {
        return createlistaPedidosController.handle(request, response);
    },
);

listaPedidosRouter.get(
    "/",
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
            limit: Joi.number(),
        }),
    }),
    (request, response) => {
        return listlistaPedidosController.handle(request, response);
    },
);

listaPedidosRouter.get(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
    }),
    (request, response) => {
        return showlistaPedidosController.handle(request, response);
    },
);
listaPedidosRouter.put(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            produto: Joi.string().required(),
            quantidade: Joi.number(),
            sn_catalogo: Joi.boolean(),
            pagina_catalogo: Joi.number(),
        }),
    }),
    (request, response) => {
        return updatelistaPedidosController.handle(request, response);
    },
);
listaPedidosRouter.delete(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
    }),
    (request, response) => {
        return deletelistaPedidosController.handle(request, response);
    },
);

export { listaPedidosRouter };
