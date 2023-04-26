import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IListaPedidosRepository } from "src/listaPedidos/repositories/iListaPedidosRepository";
import { ListaPedidos } from "src/listaPedidos/entities/listaPedidos";

type ShowListaPedidosParams = {
    id: string;
};
@injectable()
export class ShowListaPedidosUseCase {
    constructor(
        @inject("RepositoryListaPedidos")
        private listaPedidosRepository: IListaPedidosRepository,
    ) { }
    async execute({ id }: ShowListaPedidosParams): Promise<ListaPedidos> {
        const listaPedidos = await this.listaPedidosRepository.findById(id);
        if (!listaPedidos) throw new AppError("Client not found", 404);
        return listaPedidos;
    }
}
