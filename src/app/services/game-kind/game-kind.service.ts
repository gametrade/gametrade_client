import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GameKind } from '../../models/game-kind';

const game_kinds: GameKind[] = [
    {
        id: 1,
        name: 'Cartas'
    },
    {
        id: 2,
        name: 'Tabuleiro'
    },
    {
        id: 3,
        name: 'Miniaturas'
    },
    {
        id: 4,
        name: 'RPG'
    },
    {
        id: 5,
        name: 'Dados'
    },
    {
        id: 6,
        name: 'Enigmas'
    },
    {
        id: 7,
        name: 'Acessórios'
    }
];

@Injectable()
export class GameKindService {

    constructor() { }

    getKind(id?: number): Observable<GameKind[]> {
        return Observable.of(game_kinds.filter(
            (theme: GameKind) => id ? theme.id === id : true
        ));
    }

}
