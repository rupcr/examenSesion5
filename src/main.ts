import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
	const options = new DocumentBuilder()
	.setTitle('Realizar Swagger')
	.setDescription('Esto es una descripción para Swagger-examen sesion 5')
	.setVersion('1.0')
	.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('db',app,document);
  await app.listen(3000); 
  //testfddsf
}
bootstrap();

