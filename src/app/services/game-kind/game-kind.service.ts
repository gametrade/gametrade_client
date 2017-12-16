//#region Imports

// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// Models
import { GameKind } from '../../models/game-kind';
import { BaseService } from '../base-service/base.service';

//#endregion

@Injectable()
export class GameKindService {

    constructor(
        private baseService: BaseService
    ) { }

    getKinds(): Observable<GameKind[]> {
        return this.baseService.GET('game_kinds.json').map(
            (result: any) => result.map(kind => kind.game_kind)
        );
    }

}
