import { container } from "tsyringe";
import { CreateListaPedidosController } from "../useCases/createListaPedidos/createListaPedidosController";
import { DeleteListaPedidosController } from "../useCases/deleteListaPedidos/deleteListaPedidosController";
import { ListListaPedidosController } from "../useCases/listListaPedidos/listListaPedidosController";
import { ShowListaPedidoController } from "../useCases/showListaPedidos/showListaPedidosController";
import { RepositoryListaPedidos } from "../repositories/listaPedidosRepository";
import { IListaPedidosRepository } from "../repositories/iListaPedidosRepository";
import { UpdateListaPedidosController } from "../useCases/updateListaPedidos/updateListaPedidosController";
container.registerSingleton<IListaPedidosRepository>(
    "RepositoryListaPedidos",
    RepositoryListaPedidos,
);

container.registerSingleton(
    "CreateListaPedidosController",
    CreateListaPedidosController,
);
container.registerSingleton(
    "DeleteListaPedidosController",
    DeleteListaPedidosController,
);
container.registerSingleton(
    "ListListaPedidosController",
    ListListaPedidosController,
);
container.registerSingleton(
    "ShowListaPedidoController",
    ShowListaPedidoController,
);
container.registerSingleton(
    "UpdateListaPedidosController",
    UpdateListaPedidosController,
);
