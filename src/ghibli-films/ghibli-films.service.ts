import { Injectable } from '@nestjs/common';
import { get, post, Response } from 'request';

@Injectable()
export class GhibliFilmsService {
    uri = 'https://ghibliapi.herokuapp.com/films';

    getFilms(): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            get(this.uri, (error: Error, response: Response, body: any) => {
              if (error) {
                return reject(error);
              }

              if (body.error) {
                return reject(body.error);
              }
              resolve(JSON.parse(body));
              });
            });
        }
}
