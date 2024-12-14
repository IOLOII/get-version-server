import { Test, TestingModule } from '@nestjs/testing';
import { GlobalmService } from './globalm.service';

describe('GlobalmService', () => {
  let service: GlobalmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalmService],
    }).compile();

    service = module.get<GlobalmService>(GlobalmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
