import "dotenv/config";
import "reflect-metadata";
import { app } from "./app";
import { dataSource } from "../typeorm/index";

dataSource.initialize().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`running on port ${process.env.PORT}`);
    });
});
