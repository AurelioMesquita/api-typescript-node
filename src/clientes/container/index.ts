import { container } from "tsyringe";
import { IClientesRepository } from "../repositories/iClientesRepository";
import { RepositoryClientes } from "../repositories/clientesRepository";
import { CreateClienteController } from "../useCases/createCliente/createClienteController";
import { DeleteClienteController } from "../useCases/deleteCliente/deleteClienteController";
import { ListClientesController } from "../useCases/listClientes/listClientesController";
import { ShowClienteController } from "../useCases/showCliente/showClienteController";
import { UpdateClientesController } from "../useCases/updateCliente/updateClienteController";
container.registerSingleton<IClientesRepository>(
    "RepositoryClientes",
    RepositoryClientes,
);

container.registerSingleton("CreateClienteController", CreateClienteController);
container.registerSingleton("DeleteClienteController", DeleteClienteController);
container.registerSingleton("ListClientesController", ListClientesController);
container.registerSingleton("ShowClienteController", ShowClienteController);
container.registerSingleton(
    "UpdateClientesController",
    UpdateClientesController,
);
