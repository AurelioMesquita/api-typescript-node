import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
@Entity("lista_pedidos")
export class ListaPedidos {
    @PrimaryColumn()
    id?: string;

    @Column()
    produto: string;

    @Column()
    quantidade: number;

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
