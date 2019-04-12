import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GhibliFilmsModule } from './ghibli-films/ghibli-films.module';

@Module({
  imports: [GhibliFilmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
