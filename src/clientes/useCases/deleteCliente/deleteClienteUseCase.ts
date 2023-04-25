import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IClientesRepository } from "src/clientes/repositories/iClientesRepository";

type DeleteClienteParams = {
    id: string;
};
@injectable()
export class DeleteClienteUseCase {
    constructor(
        @inject("RepositoryClientes")
        private clienteRepository: IClientesRepository,
    ) { }
    async execute({ id }: DeleteClienteParams): Promise<void> {
        const cliente = await this.clienteRepository.findById(id);
        if (!cliente) throw new AppError("Client not found", 404);
        await this.clienteRepository.delete(cliente);
    }
}
