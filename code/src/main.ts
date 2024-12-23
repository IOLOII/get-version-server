import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(9000)
}
bootstrap()
console.log('http://127.0.0.1:9000')
