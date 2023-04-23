import { Role } from "@roles/entities/roles";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IProdutoRepository } from "src/produtos/repositories/iProdutosRepository";

type ShowProdutosParams = {
    id: string;
};
@injectable()
export class ShowProdutoUseCase {
    constructor(
        @inject("RepositoryProdutos")
        private produtosRepository: IProdutoRepository,
    ) { }
    async execute({ id }: ShowProdutosParams): Promise<Role> {
        const produto = await this.produtosRepository.findById(id);
        if (!produto) throw new AppError("Product not found", 404);
        return produto;
    }
}
