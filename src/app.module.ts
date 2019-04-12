import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';
import { GhibliFilmsModule } from './ghibli-films/ghibli-films.module';

@Module({
  imports: [FilmsModule, GhibliFilmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
