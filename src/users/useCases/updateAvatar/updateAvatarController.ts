import { Request, Response } from "express";
import { container } from "tsyringe";
import { instanceToInstance } from "class-transformer";
import { UpdateAvatarUseCase } from "./updateAvatarUseCase";

export class UpdateAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const updateAvatar = container.resolve(UpdateAvatarUseCase);
        const user = await updateAvatar.execute({
            userId: request.user.id,
            avatarFileName: request.file.filename,
        });
        return response.json(instanceToInstance(user));
    }
}
