import { AppError } from "@shared/errors/AppError";
import { injectable, inject } from "tsyringe";
import { IListaPedidosRepository } from "src/listaPedidos/repositories/iListaPedidosRepository";
import { ListaPedidos } from "src/listaPedidos/entities/listaPedidos";
type CreateListaPedidoDTO = {
    produto: string;
    quantidade: number;
    sn_catalogo: boolean;
    pagina_catalogo: number;
};
@injectable()
export class CreateListaPedidosUseCase {
    constructor(
        @inject("RepositoryListaPedidos")
        private listaPedidosRepository: IListaPedidosRepository,
    ) { }
    async execute({
        produto,
        quantidade,
        sn_catalogo,
        pagina_catalogo,
    }: CreateListaPedidoDTO): Promise<ListaPedidos> {
        const listaProdutosAlreadyExists =
            await this.listaPedidosRepository.findByName(produto);
        if (listaProdutosAlreadyExists)
            throw new AppError("listProduct Already exists");
        return this.listaPedidosRepository.create({
            produto,
            quantidade,
            sn_catalogo,
            pagina_catalogo,
        });
    }
}
