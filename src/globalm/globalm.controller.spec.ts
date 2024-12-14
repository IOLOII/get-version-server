import { Test, TestingModule } from '@nestjs/testing'
import { GlobalmController } from './globalm.controller'

describe('GlobalmController', () => {
  let controller: GlobalmController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlobalmController]
    }).compile()

    controller = module.get<GlobalmController>(GlobalmController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
