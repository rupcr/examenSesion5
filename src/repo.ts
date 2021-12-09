import { Logger } from "@nestjs/common";
import { EntityRepository, MongoRepository, Repository } from "typeorm";
import {Catalogo} from "./articulo.entity";



@EntityRepository(Catalogo)

export class CatalogoRepository extends MongoRepository<Catalogo>{

private logger = new Logger('');


}
