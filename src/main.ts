
import { NestFactory } from '@nestjs/core';
import { setupValidation } from './utils/validation.pipe/validation.pipe';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupValidation(app);

  await app.listen(3000);
}
bootstrap();

