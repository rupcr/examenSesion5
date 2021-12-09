import { IsNotEmpty, IsOptional, IsEnum, ValidateNested, IsString, IsNumber } from 'class-validator'; 

    export class ArticuloDTO{
    @IsNotEmpty()
    @IsString() 
    item: string;

    @IsNotEmpty()
    @IsNumber()
    precio: number;

    @IsNotEmpty()
    @IsString()
    descripcion: string;
    
    @IsOptional()
    LugarCompra: string;
    
    @IsNotEmpty()
    fechaCompra: Date;
}