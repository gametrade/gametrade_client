//#region Imports
// Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

// RxJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/from';

// Services
import { GameService } from '../../services/games/games.service';
import { Angular2TokenService } from 'angular2-token';

// Models
import { Game } from '../../models/game';
import { BaseService } from '../../services/base-service/base.service';

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
        private baseService: BaseService,
        private router: Router,
        private route: ActivatedRoute) {
            this.baseService.currentUser = this.tokenService.currentUserData;
        }

    ngOnInit() {
        this.filteredOptions = this.searchText.valueChanges
            .startWith(null)
            .debounceTime(500)
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

    signOut() {
        this.tokenService.signOut();
        this.router.navigate(['home']);
    }
}
