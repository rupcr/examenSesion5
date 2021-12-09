import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticuloDTO } from './catalogo.dto';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getTodo() {
    return this.appService.getTodo();
  }

  @Get("/:id")
  getUnArticulo(@Param('id') id:string) {
    console.log(id);
    return this.appService.getUnArticulo(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  agregar(@Body() req:any){
  return this.appService.agregarUnArticulo({});
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  editar(@Param('id') id:string,@Body()data:ArticuloDTO)
  {
    console.log(id);
  	return this.appService.editarUnArticulo(id,data);
  }

  @Delete("borrarArticulo/:id")
  eliminarUnArticulo(@Param('id') id:string) {
    console.log(id);
    return this.appService.eliminarUnArticulo(id);
  }



}
