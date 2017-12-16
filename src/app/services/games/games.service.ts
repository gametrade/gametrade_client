//#region Imports

// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

// Services
import { BaseService } from '../base-service/base.service';

// Models
import { Game, GamePayload, PhotoPayload } from '../../models/game';
import { Subject } from 'rxjs/Subject';
import { MatSnackBar } from '@angular/material';

//#endregion

@Injectable()
export class GameService {

    nearby_games: Observable<Game[]>;
    private nearbySubject: Subject<Game[]>;

    constructor(private baseService: BaseService, private snack: MatSnackBar) {
        this.nearbySubject = new Subject<Game[]>();
        this.nearby_games = this.nearbySubject.asObservable();
    }

    getMyGames(): Observable<Game[]> {
        return this.baseService.GET(`my_games.json`).map((result: any) => result.map(x => x.game));
    }

    getGames(name: string, page?: number, kind?: string, theme?: string, players?: string, launch_date?: string): Observable<Game[]> {
        let url = `games.json?q[name_cont]=${name}`;

        if (page) { url = url.concat(`&page=${page}&per_page=12`); }
        if (kind) { url = url.concat(`&q[game_kind_id_eq]=${kind}`); }
        if (theme) { url = url.concat(`&q[theme_id_eq]=${theme}`); }
        if (players) { url = url.concat(`&q[players_eq]=${players}`); }
        if (launch_date) { url = url.concat(`&q[launch_date_eq]=${launch_date}`); }

        return this.baseService.GET(url).map((result: any) => result.map(x => x.game));
    }

    getMostRecentGames(): Observable<Game[]> {
        return this.baseService.GET(`games.json?page=1&per_page=5`).map((result: any) => result.map(x => x.game));
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

    setFavorite(game_id: number) {
        const payload = {
            game_id
        };

        return this.baseService.POST(`wishlists.json`, payload);
    }

    removeFavorite(game_id: number) {
        return this.baseService.DELETE(`wishlists/${game_id}.json`);
    }

    getFavorites() {
        return this.baseService.GET('wishlists.json').map(
            (result: any) => {
                return result.map(x => x.wishlist.game);
            }
        );
    }

    getNearby() {
        // return this.baseService.currentLocation.switchMap(
        //     (coords: Coordinates) => {
        //         const params = `lat=${coords.latitude}&lng=${coords.longitude}&range=10000`;

        //         return this.baseService.GET(`games/nearby.json?${params}`);
        //     }
        // );
        const observable = new Subject<Coordinates>();

        navigator.geolocation.getCurrentPosition(
            (pos: Position) => {
                const coords = pos.coords;

                const params = `lat=${coords.latitude}&lng=${coords.longitude}&range=10000`;

                this.baseService.GET(`games/nearby.json?${params}`).subscribe(
                    (gamesResult: Game[]) => {
                        const games = gamesResult.slice(0, 5);

                        Observable.forkJoin(
                            gamesResult.map((game: any) => this.getGame(game.game.id.toString()))
                        ).subscribe(
                            (result: any) => {
                                this.nearbySubject.next(result.slice(0, 5));
                            });
                    }
                );
            }
        );
    }
}
