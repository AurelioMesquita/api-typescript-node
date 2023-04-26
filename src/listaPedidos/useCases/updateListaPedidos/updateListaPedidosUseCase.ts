import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IListaPedidosRepository } from "src/listaPedidos/repositories/iListaPedidosRepository";
import { ListaPedidos } from "src/listaPedidos/entities/listaPedidos";

type UpdateListaPedidosDTO = {
    id: string;
    produto: string;
    quantidade: number;
    sn_catalogo: boolean;
    pagina_catalogo: number;
};

@injectable()
export class UpdateListaPedidosUseCase {
    constructor(
        @inject("RepositoryListaPedidos")
        private listaPedidosRepository: IListaPedidosRepository,
    ) { }
    async execute({
        id,
        produto,
        quantidade,
        sn_catalogo,
        pagina_catalogo,
    }: UpdateListaPedidosDTO): Promise<ListaPedidos> {
        const listaPedidos = await this.listaPedidosRepository.findById(id);
        if (!listaPedidos) throw new AppError("Client not found", 404);
        const nameExist = await this.listaPedidosRepository.findByName(produto);
        if (nameExist && listaPedidos.produto !== nameExist.produto)
            throw new AppError("Name Already exists");

        listaPedidos.produto = produto;
        listaPedidos.quantidade = quantidade;
        listaPedidos.sn_catalogo = sn_catalogo;
        listaPedidos.pagina_catalogo = pagina_catalogo;
        return this.listaPedidosRepository.save(listaPedidos);
    }
}
