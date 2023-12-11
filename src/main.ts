import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


const start = async () => {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);//make instanc our app 

  const config = new DocumentBuilder()
    .setTitle('I lern nest')
    .setDescription("Documentation RESTAPIs")
    .setVersion('1.0.0')
    .addTag('NameTag')
    .build();

  const document = SwaggerModule.createDocument(app, config)//first pararm - instance our app, second par - swagger config
  SwaggerModule.setup('/api/docs', app, document)//first param - path to our documentation

  app.listen(PORT, () => console.log(`Server was start on port: ${PORT}`));
}

start();