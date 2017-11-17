//#region Imports
// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models
import { Game } from '../../../models/game';

// Services
import { GameService } from '../../../services/games/games.service';

//#endregion

@Component({
    selector: 'gametrade-game-details',
    templateUrl: './game-details.component.html',
    styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

    //#region Properties
    public game: Game;

    //#endregion

    //#region Constructor
    constructor(
        private route: ActivatedRoute,
        private gameService: GameService
    ) { }

    //#endregion

    ngOnInit() {
        this.route.params.subscribe(
            param => {
                this.gameService.getGame(param.id).subscribe(
                    (game: Game) => {
                        this.game = game;
                    }
                );
            }
        );
    }
}
