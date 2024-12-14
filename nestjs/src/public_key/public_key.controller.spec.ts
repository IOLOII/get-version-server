import { Test, TestingModule } from '@nestjs/testing'
import { PublicKeyController } from './public_key.controller'

describe('PublicKeyController', () => {
  let controller: PublicKeyController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicKeyController]
    }).compile()

    controller = module.get<PublicKeyController>(PublicKeyController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
