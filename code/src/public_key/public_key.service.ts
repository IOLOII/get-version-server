import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Sequelize } from 'sequelize-typescript'

import { PublicKey } from './public_key.model'

@Injectable()
export class PublicKeyService {
  constructor(
    @InjectModel(PublicKey)
    private publicKeyModel: typeof PublicKey,
    private sequelize: Sequelize
  ) {}
  async setPublicKey(key: string, username: string) {
    return this.publicKeyModel.create({
      key,
      username
    })
  }
  async verifyKey(_key: string): Promise<boolean> {
    // TODO: 验证key的有效性
    return true
  }
}
