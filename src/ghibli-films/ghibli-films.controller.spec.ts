import { Test, TestingModule } from '@nestjs/testing';
import { GhibliFilmsController } from './ghibli-films.controller';

describe('GhibliFilms Controller', () => {
  let controller: GhibliFilmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GhibliFilmsController],
    }).compile();

    controller = module.get<GhibliFilmsController>(GhibliFilmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
