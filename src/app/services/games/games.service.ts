//#region Imports

// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Services
import { BaseService } from '../base-service/base.service';

// Models
import { Game, GamePayload, PhotoPayload } from '../../models/game';

//#endregion

@Injectable()
export class GameService {

    constructor(private baseService: BaseService) { }

    getMyGames(): Observable<Game[]> {
        return this.baseService.GET(`my_games.json`);
    }

    getGames(name: string, page?: string, kind?: string, theme?: string, players?: string, launch_date?: string): Observable<Game[]> {
        let url = `games.json?q[name_cont]=${name}`;

        if (kind) { url = url.concat(`&q[game_kind_id_eq]=${kind}`); }
        if (theme) { url = url.concat(`&q[theme_id_eq]=${theme}`); }
        if (players) { url = url.concat(`&q[players_eq]=${players}`); }
        if (launch_date) { url = url.concat(`&q[launch_date_eq]=${launch_date}`); }

        return this.baseService.GET(url).map((result: any) => result.map(x => x.game));
    }

    getMostRecentGames(): Observable<Game[]> {
        return this.baseService.GET(`games.json?limit=5`).map((result: any) => result.map(x => x.game));
    }

    getGame(id: string): Observable<Game[]> {
        return this.baseService.GET(`games/${id}.json`).map(result => result.game);
    }

    newGame(newGame: GamePayload): Observable<any> {
        newGame.user_id = this.baseService.currentUser.id;
        return this.baseService.POST('games.json', newGame);
    }

    includePhoto(photos: PhotoPayload, game_id: number) {
        const payload = {
            game: {
                photos_attributes: photos.photos_attributes
            }
        };

        return this.baseService.PATCH(`games/${game_id}.json`, payload);
    }
}
