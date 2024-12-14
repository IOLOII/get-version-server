import { Module } from '@nestjs/common'
import { PublicKeyService } from './public_key.service'
import { SequelizeModule } from '@nestjs/sequelize'
// import { PublicKeyService } from './public_key.service'
import { PublicKeyController } from './public_key.controller'
import { PublicKey } from './public_key.model'

@Module({
  imports: [SequelizeModule.forFeature([PublicKey])],
  providers: [PublicKeyService],
  exports: [PublicKeyService],
  controllers: [PublicKeyController]
})
export class PublicKeyModule {}
