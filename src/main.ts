import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API-IMS')
    .setDescription(
      'API-IMS adalah API terpusat untuk mengelola Inventory, Maintenance, dan Service (IMS) pada aset perusahaan — menyediakan endpoint untuk pencatatan aset, jadwal pemeliharaan, pelaporan kerusakan, serta pelacakan riwayat servis.',
    )
    .setVersion('1.0')
    .addTag('init')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
