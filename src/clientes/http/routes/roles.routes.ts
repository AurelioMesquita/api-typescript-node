import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { container } from "tsyringe";
import { isAuthenticated } from "@shared/http/middlewares/isAuthenticated";
import { UpdateClientesController } from "src/clientes/useCases/updateCliente/updateClienteController";
import { ShowClienteController } from "src/clientes/useCases/showCliente/showClienteController";
import { ListClientesController } from "src/clientes/useCases/listClientes/listClientesController";
import { CreateClienteController } from "src/clientes/useCases/createCliente/createClienteController";
import { DeleteClienteController } from "src/clientes/useCases/deleteCliente/deleteClienteController";

const clientesRouter = Router();
const createCLienteController = container.resolve(CreateClienteController);
const listClienteController = container.resolve(ListClientesController);
const showClienteController = container.resolve(ShowClienteController);
const updateClienteController = container.resolve(UpdateClientesController);
const deleteClienteController = container.resolve(DeleteClienteController);
clientesRouter.use(isAuthenticated);

clientesRouter.post(
    "/",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            endereco: Joi.string(),
            numero: Joi.string(),
            telefone: Joi.string(),
            cidade: Joi.string(),
            montante_total: Joi.number(),
        }),
    }),
    (request, response) => {
        return createCLienteController.handle(request, response);
    },
);

clientesRouter.get(
    "/",
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
            limit: Joi.number(),
        }),
    }),
    (request, response) => {
        return listClienteController.handle(request, response);
    },
);

clientesRouter.get(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
    }),
    (request, response) => {
        return showClienteController.handle(request, response);
    },
);
clientesRouter.put(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            endereco: Joi.string(),
            numero: Joi.string(),
            telefone: Joi.string(),
            cidade: Joi.string(),
            montante_total: Joi.number(),
        }),
    }),
    (request, response) => {
        return updateClienteController.handle(request, response);
    },
);
clientesRouter.delete(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
    }),
    (request, response) => {
        return deleteClienteController.handle(request, response);
    },
);

export { clientesRouter };
