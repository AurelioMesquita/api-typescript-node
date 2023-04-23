import { AppError } from "@shared/errors/AppError";
import { injectable, inject } from "tsyringe";
import { IProdutoRepository } from "src/produtos/repositories/iProdutosRepository";
import { Produto } from "src/produtos/entities/produtos";

type CreateProdutoDTO = {
    name: string;
    sn_estoque: boolean;
    valor: number;
    sn_catalogo: boolean;
    pagina_catalogo: number;
};
@injectable()
export class CreateProdutoUseCase {
    constructor(
        @inject("RepositoryProdutos")
        private produtosRepository: IProdutoRepository,
    ) { }
    async execute({
        name,
        sn_estoque,
        valor,
        sn_catalogo,
        pagina_catalogo,
    }: CreateProdutoDTO): Promise<Produto> {
        const produtoAlreadyExists = await this.produtosRepository.findByName(
            name,
        );
        if (produtoAlreadyExists) throw new AppError("Product Already exists");
        return this.produtosRepository.create({
            name,
            sn_estoque,
            valor,
            sn_catalogo,
            pagina_catalogo,
        });
    }
}
