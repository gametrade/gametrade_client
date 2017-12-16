import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/game';
import { GameService } from '../../../services/games/games.service';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../../../services/base-service/base.service';

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
        this.gameService.getNearby();
        this.gameService.nearby_games.subscribe(
            (gamesResult: Game[]) => {
                        this.nearby_games = gamesResult;
            },
            (error: Error) => {
                this.snack.open(error.message, null, {
                    duration: 2000
                });
            }
        );
    }

}
