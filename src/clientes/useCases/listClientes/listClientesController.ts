import { Request, Response } from "express";
import { ListClientesUseCase } from "./listClientesUseCase";
import { container } from "tsyringe";

export class ListClientesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listClientesUseCase = container.resolve(ListClientesUseCase);
        const page =
            request.query.page && Number(request.query.page) > 0
                ? Number(request.query.page)
                : 1;
        const limit =
            request.query.limit && Number(request.query.limit) > 0
                ? Number(request.query.limit)
                : 15;
        const clientes = await listClientesUseCase.execute({ page, limit });
        return response.json(clientes);
    }
}
