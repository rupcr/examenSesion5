import { Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import {Catalogo} from "./articulo";



@EntityRepository(Catalogo)

export class CatalogoRepository extends Repository<Catalogo>{

private logger = new Logger('');


}
