import { ListaPedidosPaginateProperties } from "src/listaPedidos/repositories/iListaPedidosRepository";
import { IListaPedidosRepository } from "src/listaPedidos/repositories/iListaPedidosRepository";
import { inject, injectable } from "tsyringe";

type listListaPedidosUseCaseParams = {
    page: number;
    limit: number;
};
@injectable()
export class ListListaPedidosUseCase {
    constructor(
        @inject("RepositoryListaPedidos")
        private listaPedidosrepository: IListaPedidosRepository,
    ) { }

    execute({
        page,
        limit,
    }: listListaPedidosUseCaseParams): Promise<ListaPedidosPaginateProperties> {
        const take = limit;
        const skip = (Number(page) - 1) * take;
        return this.listaPedidosrepository.findAll({ page, skip, take });
    }
}
