import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


const start = async () => {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);//make instanc our app 

  app.listen(PORT, () => console.log(`Server was start on port: ${PORT}`));
}

start();