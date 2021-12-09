import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  getHello(): string {
    return 'Hello World!';
  }
  getTodo() {
    return []; 
  }
  getUnArticulo(id:string){
    return {id:id};
  }
  agregarUnArticulo(data: object) {
    return 'Agregado';
  }
  editarUnArticulo(id:string,data:object) {
    return 'editado';
  }
  eliminarUnArticulo(id:string){
    return 'Eliminado';
  }
}
