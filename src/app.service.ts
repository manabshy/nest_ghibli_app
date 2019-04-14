import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const ghibli_films = 'http://localhost:3000/ghibli-films';
    return`Check Ghibli Films at:${ghibli_films}`;
  }
}
