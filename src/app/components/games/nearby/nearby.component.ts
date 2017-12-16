import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/game';
import { GameService } from '../../../services/games/games.service';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'gametrade-nearby',
    templateUrl: './nearby.component.html',
    styleUrls: ['./nearby.component.scss']
})
export class NearbyComponent implements OnInit {

    nearby_games: Game[];

    constructor(
        private gameService: GameService,
        private snack: MatSnackBar
    ) { }

    ngOnInit() {
        this.gameService.getNearby().subscribe(
            (gamesResult: Game[]) => {
                const games = gamesResult.slice(0, 5);

                Observable.forkJoin(
                    gamesResult.map((game: any) => this.gameService.getGame(game.game.id.toString()))
                ).subscribe(
                    (result: any) => {
                        this.nearby_games = result.slice(0, 5);
                    });
            },
            (error: Error) => {
                this.snack.open(error.message, null, {
                    duration: 2000
                });
            }
        );
    }

}
