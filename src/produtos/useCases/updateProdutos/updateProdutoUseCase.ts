import { Produto } from "src/produtos/entities/produtos";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IProdutoRepository } from "src/produtos/repositories/iProdutosRepository";

type UpdateProdutoTO = {
    id: string;
    name: string;
    sn_estoque: boolean;
    valor: number;
    sn_catalogo: boolean;
    pagina_catalogo: number;
};

@injectable()
export class UpdateProdutoUseCase {
    constructor(
        @inject("RepositoryProdutos")
        private produtosRepository: IProdutoRepository,
    ) { }
    async execute({
        id,
        name,
        sn_estoque,
        valor,
        sn_catalogo,
        pagina_catalogo,
    }: UpdateProdutoTO): Promise<Produto> {
        const produto = await this.produtosRepository.findById(id);
        if (!produto) throw new AppError("Product not found", 404);
        const nameExist = await this.produtosRepository.findByName(name);
        if (nameExist && produto.name !== nameExist.name)
            throw new AppError("Name Already exists");

        produto.name = name;
        produto.sn_estoque = sn_estoque;
        produto.valor = valor;
        produto.sn_catalogo = sn_catalogo;
        produto.pagina_catalogo = pagina_catalogo;
        return this.produtosRepository.save(produto);
    }
}
