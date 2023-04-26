import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IListaPedidosRepository } from "src/listaPedidos/repositories/iListaPedidosRepository";

type DeleteListaPedidoParams = {
    id: string;
};
@injectable()
export class ListaPedidosUseCase {
    constructor(
        @inject("RepositoryListaPedidos")
        private listaPedidosRepository: IListaPedidosRepository,
    ) { }
    async execute({ id }: DeleteListaPedidoParams): Promise<void> {
        const listaPedidos = await this.listaPedidosRepository.findById(id);
        if (!listaPedidos) throw new AppError("listPedidos not found", 404);
        await this.listaPedidosRepository.delete(listaPedidos);
    }
}
