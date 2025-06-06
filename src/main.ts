import {ValidationPipe} from "@nestjs/common";
import {NestFactory} from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as dotenv from "dotenv";
import {AppModule} from "./app.module";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up ValidationPipe with useful defaults
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      errorHttpStatusCode: 400,
    })
  );

  const config = new DocumentBuilder()
    .setTitle("link-resolver Link Resolver")
    .setDescription("link-resolver API documentation")
    .setVersion("1.0")
    .addTag("link-resolver")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);

  if (process.env.NODE_ENV === "development") app.enableCors();

  await app.listen(3000);
}

bootstrap();
