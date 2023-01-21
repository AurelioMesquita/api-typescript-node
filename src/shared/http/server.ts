import { AppError } from "@shared/errors/AppError";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes";
const server = express();
server.use(cors());
server.use(routes);
server.use(express.json());

server.use(
    (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        if (error instanceof AppError) {
            return response
                .status(error.statusCode)
                .json({ status: "error", message: error.message });
        }

        return response
            .status(500)
            .json({ status: "error", mesage: "Internal server error" });
    },
);
server.listen(process.env.PORT, () => {
    console.log(`running on port ${process.env.PORT}`);
});
export { server };
