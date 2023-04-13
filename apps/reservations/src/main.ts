import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);

  await app.useGlobalPipes(new ValidationPipe());

  await app.listen(8080);
}
bootstrap();
