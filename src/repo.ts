import { EntityRepository, MongoRepository } from "typeorm";
import { Catalogo } from "./articulo.entity";
import { ArticuloDTO } from "./catalogo.dto";

@EntityRepository(Catalogo)
export class CatalogoRepository extends MongoRepository<Catalogo>{
    async createArticulo(data: ArticuloDTO){
        // declaracion
        const {descripcion, fechaCompra, LugarCompra,item,precio} = data;
        //instancia
        const articulo = new Catalogo();
        //updates
        articulo.descripcion = descripcion;
        articulo.fechaCompra = fechaCompra;
        articulo.precio = precio;
        articulo. LugarCompra =  LugarCompra;
        articulo.item = item;
        return await articulo.save();
    }
}

