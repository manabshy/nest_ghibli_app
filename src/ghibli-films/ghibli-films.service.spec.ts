import { Test, TestingModule } from '@nestjs/testing';
import { GhibliFilmsService } from './ghibli-films.service';

describe('GhibliFilmsService', () => {
  let service: GhibliFilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GhibliFilmsService],
    }).compile();

    service = module.get<GhibliFilmsService>(GhibliFilmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
