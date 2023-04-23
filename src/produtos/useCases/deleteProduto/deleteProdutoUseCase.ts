import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IProdutoRepository } from "src/produtos/repositories/iProdutosRepository";

type DeleteRoleParams = {
    id: string;
};
@injectable()
export class DeleteProdutoUseCase {
    constructor(
        @inject("RepositoryProdutos")
        private produtoRepository: IProdutoRepository,
    ) { }
    async execute({ id }: DeleteRoleParams): Promise<void> {
        const produto = await this.produtoRepository.findById(id);
        if (!produto) throw new AppError("Product not found", 404);
        await this.produtoRepository.delete(produto);
    }
}
