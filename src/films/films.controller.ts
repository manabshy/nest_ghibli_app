import { Controller, Get, Param } from '@nestjs/common';
import { FilmsService } from '../films/films.service';
@Controller('films')
export class FilmsController {
    constructor(private filmsService: FilmsService) {}
    @Get()
    async getFilms() {
        const films = await this.filmsService.getFilms();
        return films;
    }

    @Get(':filmID')
    async getFilm(@Param('bookID') filmID) {
        const film = await this.filmsService.getFilm(filmID);
        return film;
    }
}
