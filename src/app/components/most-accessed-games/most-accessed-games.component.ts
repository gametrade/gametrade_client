import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/games/games.service';

@Component({
    selector: 'gametrade-most-accessed-games',
    templateUrl: './most-accessed-games.component.html',
    styleUrls: ['./most-accessed-games.component.scss']
})
export class MostAccessedGamesComponent implements OnInit {
    public most_accessed_games: Array<Game>;

    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.gameService.getMostAccessedGames().subscribe(
            (mostAccessedGames: Array<Game>) => {
                this.most_accessed_games = mostAccessedGames;
            },
            (error: Error) => {
                console.log(error);
            }
        );
    }
}
