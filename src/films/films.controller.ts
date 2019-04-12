import { Controller, Get, Param } from '@nestjs/common';
import { FilmsService } from '../films/films.service';
@Controller('films')
export class FilmsController {
    constructor(private filmsService: FilmsService) {}
    @Get()
    async getFilms() {
        const films = await this.filmsService.getFilms();
        const filmsTitle = [];
        films.map(f => {
            filmsTitle.push(f.title);
        });
        return filmsTitle;
    }

}
