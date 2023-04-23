import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { container } from "tsyringe";

import { isAuthenticated } from "@shared/http/middlewares/isAuthenticated";
import { CreateProdutoController } from "src/produtos/useCases/createProduto/createProdutoController";
import { ListProdutosController } from "src/produtos/useCases/listProdutos/listProdutosController";
import { ShowProdutoController } from "src/produtos/useCases/showProdutos/showProdutoController";
import { UpdateProdutoController } from "src/produtos/useCases/updateProdutos/updateProdutoController";
import { DeleteProdutoController } from "src/produtos/useCases/deleteProduto/deleteProdutoController";
const produtosRouter = Router();
const createProdutoController = container.resolve(CreateProdutoController);
const listProdutoController = container.resolve(ListProdutosController);
const showProdutoController = container.resolve(ShowProdutoController);
const updateProdutoController = container.resolve(UpdateProdutoController);
const deleteProdutoController = container.resolve(DeleteProdutoController);
produtosRouter.use(isAuthenticated);

produtosRouter.post(
    "/",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
        }),
    }),
    (request, response) => {
        return createProdutoController.handle(request, response);
    },
);

produtosRouter.get(
    "/",
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
            limit: Joi.number(),
        }),
    }),
    (request, response) => {
        return listProdutoController.handle(request, response);
    },
);

produtosRouter.get(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
    }),
    (request, response) => {
        return showProdutoController.handle(request, response);
    },
);
produtosRouter.put(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
        }),
    }),
    (request, response) => {
        return updateProdutoController.handle(request, response);
    },
);
produtosRouter.delete(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
    }),
    (request, response) => {
        return deleteProdutoController.handle(request, response);
    },
);

export { produtosRouter };
