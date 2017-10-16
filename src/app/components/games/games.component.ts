import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GamesService } from '../../services/games/games.service';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
    private games: Array<any>;

    constructor(private gamesService: GamesService, private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.getGames();
    }

    getGames() {
        this.gamesService.getGames().subscribe(
            games => {
                this.games = games;
            },
            error => {
                console.log(error);
            }
        );
    }
}