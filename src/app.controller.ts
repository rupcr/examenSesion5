import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam } from '@nestjs/swagger';
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
  @ApiBody({required:true, type: ArticuloDTO})
  @ApiOperation({summary: 'Devuelve toda la consulta'})
  getTodo() {
    return this.appService.getTodo();
  }

  @Get("/:id")
  @ApiBody({required:true, type: ArticuloDTO})
  @ApiOperation({summary: 'Devuelve un articulo'})
  @ApiParam({name: 'id'})
  getUnArticulo(@Param('id') id:string) {
    console.log(id);
    return this.appService.getUnArticulo(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiBody({required:true, type: ArticuloDTO})
  @ApiOperation({summary: 'Agregar un articulo'})
  agregar(@Body() req:any){
  return this.appService.agregarUnArticulo({});
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  @ApiBody({required:true, type: ArticuloDTO})
  @ApiOperation({summary: 'Editar un articulo'})
  @ApiParam({name: 'id'})
  editar(@Param('id') id:string,@Body()data:ArticuloDTO)
  {
    console.log(id);
  	return this.appService.editarUnArticulo(id,data);
  }

  @Delete("/:id")
  @ApiBody({required:true, type: ArticuloDTO})
  @ApiOperation({summary: 'Eliminar un articulo'})
  @ApiParam({name: 'id'})
  eliminarUnArticulo(@Param('id') id:string) {
    console.log(id);
    return this.appService.eliminarUnArticulo(id);
  }



}

