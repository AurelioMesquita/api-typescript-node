import { v4 as uuidV4 } from "uuid";
import { dataSource } from "@shared/typeorm";
import { hash } from "bcryptjs";

async function create() {
    const connection = await dataSource.initialize();
    const roleId = uuidV4();
    await connection.query(`
        INSERT INTO roles(id,name)
        values('${roleId}','T.I')
    `);
    const userId = uuidV4();
    const password = await hash("12345", 10);
    await connection.query(`
        INSERT INTO users(id,name,email,password,"isAdmin",roleId)
        values('${userId}','Admin','admin@hotmail.com','${password}',true,'${roleId}')
    `);
    await connection.destroy();
}
create().then(() => console.log("User Admin Created."));
