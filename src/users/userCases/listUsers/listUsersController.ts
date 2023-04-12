import { Request, Response } from "express";

import { container } from "tsyringe";
import { ListUserUseCase } from "./listUsersUseCase";
export class ListUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUserUseCase = container.resolve(ListUserUseCase);
        const page =
            request.query.page && Number(request.query.page) > 0
                ? Number(request.query.page)
                : 1;
        const limit =
            request.query.limit && Number(request.query.limit) > 0
                ? Number(request.query.limit)
                : 15;
        const users = await listUserUseCase.execute({ page, limit });
        return response.json(users);
    }
}
