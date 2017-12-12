import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GameService } from '../../services/games/games.service';
import { Game } from '../../models/game';

@Component({
    selector: 'gametrade-my-games',
    templateUrl: './my-games.component.html',
    styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {
    public my_games: Game[];
    public my_favs: Game[];

    constructor(private gameService: GameService, private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.getMyGames();
    }

    getMyGames() {
        this.gameService.getMyGames().subscribe(
            (games: any) => {
                this.my_games = games;
            },
            (error: Error) => {
                console.log(error);
            }
        );
    }
}
