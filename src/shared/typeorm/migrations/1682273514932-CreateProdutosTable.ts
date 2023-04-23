import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProdutosTable1682273514932 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produtos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "sn_estoque",
                        type: "boolean",
                    },
                    {
                        name: "valor",
                        type: "int",
                    },
                    {
                        name: "sn_catalogo",
                        type: "boolean",
                    },
                    {
                        name: "pagina_catalogo",
                        type: "int",
                        default: false,
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
        await queryRunner.dropTable("produtos");
    }
}
