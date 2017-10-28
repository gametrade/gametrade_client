import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/games/games.service';

@Component({
    selector: 'gametrade-most-searched-games',
    templateUrl: './most-searched-games.component.html',
    styleUrls: ['./most-searched-games.component.scss']
})
export class MostSearchedGamesComponent implements OnInit {
    public most_searched_games: Array<Game>;

    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.gameService.getMostSearchedGames().subscribe(
            (mostSearchedGames: Array<Game>) => {
                this.most_searched_games = mostSearchedGames;
            },
            (error: Error) => {
                console.log(error);
            }
        );
    }
}
