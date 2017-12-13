//#region Imports

// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

// Services
import { GameService } from '../../services/games/games.service';

// Models
import { Game } from '../../models/game';
import { ScrollerService } from '../../services/scroller/scroller.service';

//#endregion

@Component({
    selector: 'gametrade-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

    private allGames: Game[];

    filters: FormGroup;

    paramName: string;
    games: Game[];
    page = 0;

    constructor(
        private gameService: GameService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private scroller: ScrollerService
    ) {
        this.filters = fb.group({
            kind: '',
            theme: '',
            players: '',
            launch_date: ''
        });
    }

    ngOnInit() {
        this.route.queryParams
            .subscribe((params: any) => {
                this.paramName = params.name;

                this.gameService.getGames(params.name).subscribe(
                    (result: any) => {
                        this.allGames = result;
                        this.games = [];
                        this.getGames();
                    }
                );
            });

        this.scroller.hasScrolled.subscribe(
            (result: boolean) => {
                if (result) {
                    this.page++;
                    this.getGames();
                }
            }
        );
    }

    getGames() {
        this.games = this.games.concat(this.allGames.slice(this.page, 12));
    }

    searchWithParameters() {
        const value = this.filters.value;

        this.gameService.getGames(this.paramName, null, value.kind, value.theme, value.players, value.launch_date).subscribe(
            (result: Game[]) => {
                this.games = result;
            }
        );
    }
}
