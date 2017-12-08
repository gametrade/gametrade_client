import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/games/games.service';

@Component({
    selector: 'gametrade-most-recent-games',
    templateUrl: './most-recent-games.component.html',
    styleUrls: ['./most-recent-games.component.scss']
})
export class MostRecentGamesComponent implements OnInit {
    public most_recent_games: Array<Game>;

    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.gameService.getMostRecentGames().subscribe(
            (mostRecentGames: Array<Game>) => {
                this.most_recent_games = mostRecentGames;
            },
            (error: Error) => {
                console.log(error);
            }
        );
    }
}
