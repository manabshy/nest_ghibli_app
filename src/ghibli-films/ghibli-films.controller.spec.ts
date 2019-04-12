import { Test, TestingModule } from '@nestjs/testing';
import { GhibliFilmsController } from './ghibli-films.controller';
import { GhibliFilmsService } from './ghibli-films.service';

describe('GhibliFilms Controller', () => {
  let controller: GhibliFilmsController;
  let ghibliFilmsService: GhibliFilmsService;

  beforeEach(async () => {
    ghibliFilmsService = new GhibliFilmsService();
    controller = new GhibliFilmsController(ghibliFilmsService);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GhibliFilmsController],
      providers: [GhibliFilmsService],
    }).compile();

    controller = module.get<GhibliFilmsController>(GhibliFilmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
