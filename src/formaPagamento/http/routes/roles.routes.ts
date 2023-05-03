import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { container } from "tsyringe";
import { isAuthenticated } from "@shared/http/middlewares/isAuthenticated";
import { UpdateFormaPagamentoController } from "src/formaPagamento/useCases/updateFormaPagamento/updateFormaPagamentoController";
import { CreateFormaPagamentoController } from "src/formaPagamento/useCases/createFormaPagamento/createFormaPagamentoController";
import { ListFormaPagamentoController } from "src/formaPagamento/useCases/listFormaPagamento/listFormaPagamentoController";
import { ShowFormaPagamentoController } from "src/formaPagamento/useCases/showFormaPagamento/showFormaPagamentoController";
import { DeleteFormaPagamentoController } from "src/formaPagamento/useCases/deleteFormaPagamento/deleteFormaPagamentoController";
const formaPagamentoRouter = Router();
const createFormaPagamentoController = container.resolve(
    CreateFormaPagamentoController,
);
const listFormaPagamentoController = container.resolve(
    ListFormaPagamentoController,
);
const showFormaPagamentoController = container.resolve(
    ShowFormaPagamentoController,
);
const updateFormaPagamentoController = container.resolve(
    UpdateFormaPagamentoController,
);
const deleteFormaPagamentoController = container.resolve(
    DeleteFormaPagamentoController,
);
formaPagamentoRouter.use(isAuthenticated);

formaPagamentoRouter.post(
    "/",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            formaPagamento: Joi.string().required(),
            quantidadeVezes: Joi.number(),
            dtInicioPagamento: Joi.date(),
        }),
    }),
    (request, response) => {
        return createFormaPagamentoController.handle(request, response);
    },
);

formaPagamentoRouter.get(
    "/",
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
            limit: Joi.number(),
        }),
    }),
    (request, response) => {
        return listFormaPagamentoController.handle(request, response);
    },
);

formaPagamentoRouter.get(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
    }),
    (request, response) => {
        return showFormaPagamentoController.handle(request, response);
    },
);
formaPagamentoRouter.put(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            formaPagamento: Joi.string().required(),
            quantidadeVezes: Joi.number(),
            dtInicioPagamento: Joi.date(),
        }),
    }),
    (request, response) => {
        return updateFormaPagamentoController.handle(request, response);
    },
);
formaPagamentoRouter.delete(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
    }),
    (request, response) => {
        return deleteFormaPagamentoController.handle(request, response);
    },
);

export { formaPagamentoRouter };
