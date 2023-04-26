import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IClientesRepository } from "src/clientes/repositories/iClientesRepository";
import { Cliente } from "src/clientes/entities/clientes";

type ShowClientesParams = {
    id: string;
};
@injectable()
export class ShowClienteUseCase {
    constructor(
        @inject("RepositoryClientes")
        private clientesRepository: IClientesRepository,
    ) { }
    async execute({ id }: ShowClientesParams): Promise<Cliente> {
        const cliente = await this.clientesRepository.findById(id);
        if (!cliente) throw new AppError("Client not found", 404);
        return cliente;
    }
}
