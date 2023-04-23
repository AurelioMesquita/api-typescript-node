import { container } from "tsyringe";
import { IProdutoRepository } from "../repositories/iProdutosRepository";
import { RepositoryProdutos } from "../repositories/produtosRepository";
import { CreateProdutoController } from "../useCases/createProduto/createProdutoController";
import { DeleteProdutoController } from "../useCases/deleteProduto/deleteProdutoController";
import { ListProdutosController } from "../useCases/listProdutos/listProdutosController";
import { ShowProdutoController } from "../useCases/showProdutos/showProdutoController";
import { UpdateProdutoController } from "../useCases/updateProdutos/updateProdutoController";

container.registerSingleton<IProdutoRepository>(
    "RepositoryProdutos",
    RepositoryProdutos,
);

container.registerSingleton("CreateRoleUseCase", CreateProdutoController);
container.registerSingleton("DeleteRoleController", DeleteProdutoController);
container.registerSingleton("ListRolesController", ListProdutosController);
container.registerSingleton("ShowRoleController", ShowProdutoController);
container.registerSingleton("UpdateRoleController", UpdateProdutoController);
