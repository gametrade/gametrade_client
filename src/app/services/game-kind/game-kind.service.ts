import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GameKind } from '../../models/game-kind';

const game_kinds: GameKind[] = [
    {
        id: 1,
        name: 'Cartas',
        description: 'TODO'
    },
    {
        id: 2,
        name: 'Tabuleiro',
        description: 'TODO'
    },
    {
        id: 3,
        name: 'Miniaturas',
        description: 'TODO'
    }
]

@Injectable()
export class GameKindService {

    constructor() { }

    getKind(id?: number): Observable<GameKind[]> {
        return Observable.of(game_kinds.filter(
            (category: GameKind) => id ? category.id === id : true
        ));
    }

}
