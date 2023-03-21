import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
const globalAny: any = global;

export const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Luna Pay API')
    .setDescription('')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  console.log({ PORT_USE: process.env.PORT })
  await app.listen(process.env.PORT || 9000, '0.0.0.0');
};
