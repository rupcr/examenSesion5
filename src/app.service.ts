import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticuloDTO } from './catalogo.dto';
import { CatalogoRepository } from './repo';

@Injectable()
export class AppService {
 
  
  constructor(
    @InjectRepository(CatalogoRepository)
    private repository: CatalogoRepository
) { }
getHello(): string {
  return 'Hello World!';
}
async getTodo() {
    console.log('ask get')
    let response = this.repository.find({});
    return await response;
}

async getUnArticulo(id: string){
  let response = await this.repository.find(
   {where: {id:id}});
    return response;
  }

async agregarUnArticulo(data: ArticuloDTO) {
    const news = await this.repository.createArticulo(data);
    console.log(news);
    return 'agregado';

}
editarUnArticulo(id: string, data: object) {
    return 'editado'
}
eliminarUnArticulo(id: string) {
    return 'eliminado';
}
}
