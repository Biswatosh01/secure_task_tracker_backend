import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow requests from the frontend
  app.enableCors({
    origin: [
      'http://localhost:8080',
      'http://localhost:3000',                        // Local backend
      'http://localhost:5000',                        // For serve -s dist
      'https://secure-task-tracker.netlify.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(3000); // Backend runs on port 3000
}
bootstrap();
