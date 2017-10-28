import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/games/games.service';

@Component({
    selector: 'gametrade-recommended-games',
    templateUrl: './recommended-games.component.html',
    styleUrls: ['./recommended-games.component.scss']
})
export class RecommendedGamesComponent implements OnInit {

    private recommended_games: Array<Game>;

    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.gameService.getRecommendedGames().subscribe(
            (recommendedGames: Array<Game>) => {
                this.recommended_games = recommendedGames;
            },
            (error: Error) => {
                console.log(error);
            }
        );
    }
}
