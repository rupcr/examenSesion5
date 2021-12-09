import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticuloDTO } from './catalogo.dto';
import { CatalogoRepository } from './repo';



@Injectable()
export class CatalogoService {
    constructor(
        @InjectRepository(CatalogoRepository)
        private repository: CatalogoRepository
    ) { }
    async obtenerTodo() {
        console.log('ask get')
        let response = this.repository.find({});
        return await response;
    }
    getUnArticulo(id: string) {
        return { id: id };
    }

    async agregarUnArticulo(data: ArticuloDTO) {
        const news = await this.repository.createArticulo(data);
        console.log(news);
        return 'agregado';

    }
    editarUnArticulo(id: string, data: object) {
        return 'editado'
    }
    eliminarArticulo(id: string) {
        return 'eliminado';
    }
}