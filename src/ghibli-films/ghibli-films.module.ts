import { Module } from '@nestjs/common';
import { GhibliFilmsController } from './ghibli-films.controller';
import { GhibliFilmsService } from './ghibli-films.service';

@Module({
  controllers: [GhibliFilmsController],
  providers: [GhibliFilmsService]
})
export class GhibliFilmsModule {}
