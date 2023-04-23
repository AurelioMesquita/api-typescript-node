import { Role } from "@roles/entities/roles";
import { AppError } from "@shared/errors/AppError";
import { injectable, inject } from "tsyringe";
import { IRolesRepository } from "@roles/repositories/iRolesRepository";
import { IProdutoRepository } from "src/produtos/repositories/iProdutosRepository";

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
    }: CreateProdutoDTO): Promise<Role> {
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
