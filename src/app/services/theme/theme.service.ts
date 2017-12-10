import { Injectable } from '@angular/core';
import { Theme } from '../../models/theme';
import { Observable } from 'rxjs/Observable';

const categories: Theme[] = [
    {
        id: 1,
        name: 'Civilizações e mitologia'
    },
    {
        id: 2,
        name: 'Monstros e criaturas'
    },
    {
        id: 3,
        name: 'Medieval e fantasia'
    },
    {
        id: 4,
        name: 'Zumbis'
    },
    {
        id: 5,
        name: 'Contemporâneos'
    },
    {
        id: 6,
        name: 'Ficção Científica'
    }
];

@Injectable()
export class ThemeService {

    constructor() { }

    getTheme(id?: number): Observable<Theme[]> {
        return Observable.of(categories.filter(
            (theme: Theme) => id ? theme.id === id : true
        ));
    }
}
