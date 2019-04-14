import { Controller, Get } from '@nestjs/common';
import { GhibliFilmsService } from './ghibli-films.service';

@Controller('ghibli-films')
export class GhibliFilmsController {

    constructor(private filmsService: GhibliFilmsService) {}
    @Get()
    async getFilms() {
        const films = await this.filmsService.getFilms();
        const filmsTitle = [];
        films.map(f => {
            filmsTitle.push({title: `${f.title}`});
        });
        return filmsTitle;
    }

}
