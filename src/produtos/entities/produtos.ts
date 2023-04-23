import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
@Entity("produtos")
export class Produto {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    sn_estoque: boolean;

    @Column()
    valor: number;

    @Column()
    sn_catalogo: boolean;

    @Column()
    pagina_catalogo: number;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
