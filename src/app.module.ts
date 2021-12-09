import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogoRepository } from './repo';
import { typeOrmConfig } from './typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
		TypeOrmModule.forFeature([CatalogoRepository])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

