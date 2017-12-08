//#region Imports
// Angular
import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { FormControl } from '@angular/forms';

// RxJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/from';

// Services
import { GameService } from '../../services/games/games.service';
import { Game } from '../../models/game';
import { Router } from '@angular/router';

//#endregion

@Component({
    selector: 'gametrade-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    searchText: FormControl = new FormControl();
    filteredOptions: any;

    constructor(
        public tokenService: Angular2TokenService,
        private gameService: GameService,
        private router: Router) { }

    ngOnInit() {
        this.filteredOptions = this.searchText.valueChanges
            .startWith(null)
            .switchMap(txt => this.filter(txt));
    }

    filter(val: string) {
        return val ? this.getGames(val) : Observable.from([]);
    }

    getGames(name: string) {
        return this.gameService.getGames(name);
    }

    gameSelected(event: any) {
        this.router.navigate(['games', event.option.value.game.id]);
    }
}
