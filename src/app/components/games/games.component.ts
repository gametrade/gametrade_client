import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GameService } from '../../services/games/games.service';
import { Game, InsertedGame } from '../../models/game';

@Component({
    selector: 'gametrade-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
    public games: Array<Game>;

    constructor(private gameService: GameService, private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.getMyGames();
    }

    getMyGames() {
        this.gameService.getMyGames().subscribe(
            (games: Array<Game>) => {
                this.games = games;
            },
            (error: Error) => {
                console.log(error);
            }
        );
    }

    newGame() {
       this.gameService.newGame().subscribe(
           (insertedGame: InsertedGame) => {
               console.log(insertedGame);
           },
           (error: Error) => {
               console.log(error);
           }
       );
        return null;
    }
}
