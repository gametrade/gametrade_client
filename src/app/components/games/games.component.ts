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
import { GameKindService } from '../../services/game-kind/game-kind.service';
import { ThemeService } from '../../services/theme/theme.service';

//#endregion

@Component({
    selector: 'gametrade-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

    private allGames: Game[];

    filters: FormGroup;

    kinds: any;
    themes: any;

    paramName: string;
    games: Game[];
    page = 1;

    constructor(
        private gameService: GameService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private scroller: ScrollerService,
        private gkSerivice: GameKindService,
        private themeService: ThemeService
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
                this.games = [];
                this.getGames();
            });

        this.scroller.hasScrolled.subscribe(
            (result: boolean) => {
                if (result) {
                    this.page++;
                    this.getGames();
                }
            }
        );

        this.gkSerivice.getKinds().subscribe(
            (result: any) => this.kinds = result || []
        );

        this.themeService.getThemes().subscribe(
            (result: any) => this.themes = result || []
        );
    }

    getGames() {
        const value = this.filters.value;

        this.gameService.getGames(this.paramName, this.page, value.kind, value.theme, value.players, value.launch_date).subscribe(
            (result: any) => {
                this.games = this.games.concat(result);
            }
        );
    }

    searchWithParameters() {
        if (!this.filters.dirty) { return null; }

        this.games = [];
        this.page = 0;

        this.getGames();
    }
}
