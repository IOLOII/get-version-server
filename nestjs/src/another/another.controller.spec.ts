import { Test, TestingModule } from '@nestjs/testing'
import { AnotherController } from './another.controller'

describe('AnotherController', () => {
  let controller: AnotherController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnotherController],
    }).compile()

    controller = module.get<AnotherController>(AnotherController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
