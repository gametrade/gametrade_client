import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GamesService {

    constructor() { }

    getGames(): Observable<any> {
        return Observable.of(
            [
                { 
                    name: 'Viletônia',
                    type: 'RPG'
                },
                { 
                    name: 'Banco imobiliário',
                    type: 'Tabuleiro'
                },
                { 
                    name: 'Yu-gi-oh!',
                    type: 'Cartas'
                },
                { 
                    name: 'Dawn of Josheta',
                    type: 'Miniatures'
                }
            ]
        );
    }
}
