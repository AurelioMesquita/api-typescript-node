import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ListaPedidos1682464634456 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "lista_pedidos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "produto",
                        type: "string",
                    },
                    {
                        name: "quantidade",
                        type: "int",
                    },
                    {
                        name: "sn_catalogo",
                        type: "boolean",
                    },
                    {
                        name: "pagina_catalogo",
                        type: "int",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("lista_pedidos");
    }
}
