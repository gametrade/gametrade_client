import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GameService } from '../../../services/games/games.service';
import { Game } from '../../../models/game';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'gametrade-my-games',
    templateUrl: './my-games.component.html',
    styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {
    public my_games: Game[];
    public my_favs: Game[];

    constructor(
        private gameService: GameService,
        private cd: ChangeDetectorRef,
        private snack: MatSnackBar
    ) { }

    ngOnInit() {
        this.getMyGames();
    }

    getMyGames() {
        this.gameService.getMyGames().subscribe(
            (games: any) => { this.my_games = games || []; },
            (error: Error) => { console.log(error); }
        );

        this.gameService.getFavorites().subscribe(
            (games: any) => { this.my_favs = games; },
            (error: Error) => { this.snack.open('Não foi possível carregar os favoritos'); }
        );
    }
}
