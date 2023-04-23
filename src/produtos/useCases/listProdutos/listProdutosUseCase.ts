import { RolesPaginateProperties } from "@roles/repositories/iRolesRepository";
import { IProdutoRepository } from "src/produtos/repositories/iProdutosRepository";
import { inject, injectable } from "tsyringe";

type listRolesUseCaseParams = {
    page: number;
    limit: number;
};
@injectable()
export class ListProdutosUseCase {
    constructor(
        @inject("RepositoryProdutos")
        private produtosRepository: IProdutoRepository,
    ) { }

    execute({
        page,
        limit,
    }: listRolesUseCaseParams): Promise<RolesPaginateProperties> {
        const take = limit;
        const skip = (Number(page) - 1) * take;
        return this.produtosRepository.findAll({ page, skip, take });
    }
}
