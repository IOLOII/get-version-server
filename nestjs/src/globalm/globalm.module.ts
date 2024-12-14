import { Global, Module } from '@nestjs/common'
import { GlobalmService } from './globalm.service'
import { GlobalmController } from './globalm.controller'

@Global()
@Module({
  providers: [GlobalmService],
  controllers: [GlobalmController]
})
export class GlobalmModule {}
