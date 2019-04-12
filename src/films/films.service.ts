import { Injectable, HttpException } from '@nestjs/common';
import { FILMS } from '../mocks/films.mock';
@Injectable()
export class FilmsService {
    films = FILMS;

    getFilms(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.films);
        });
    }
    getFilm(filmID): Promise<any> {
        const id = Number(filmID);
        return new Promise(resolve => {
            const film = this.films.find(film => film.id === id);
            if (!film) {
                throw new HttpException('Book does not exist!', 404);
            }
            resolve(film);
        });
    }
}
