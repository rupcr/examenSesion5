import { BaseEntity,Entity,Column,ObjectIdColumn} from "typeorm"

@Entity()
export class Catalogo extends BaseEntity{

        @ObjectIdColumn()
        _id: string;
    
        @Column()
        item: string;
        @Column()
        precio: number;
        @Column()
        descripcion: string;
        @Column()
        LugarCompra: string;
        @Column()
        fechaCompra: Date;
    
    }