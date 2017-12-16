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
import { ScrollerService } from '../../services/scroller/scroller.service';

//#endregion

@Component({
    selector: 'gametrade-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    searchText: FormControl = new FormControl();
    filteredOptions: any;
    newProfile: boolean;

    constructor(
        public tokenService: Angular2TokenService,
        private gameService: GameService,
        public baseService: BaseService,
        private router: Router,
        private scroller: ScrollerService,
        private route: ActivatedRoute) {
        this.baseService.currentUser = this.tokenService.currentUserData;

        if (this.baseService.currentUser && this.baseService.currentUser.photo) {
            this.baseService.currentUser.photo = this.baseService.currentUser.photo.concat(`?${Math.random().toString()}`);
        }
    }

    ngOnInit() {
        this.newProfile = !!localStorage.getItem('newProfile') || false;

        this.filteredOptions = this.searchText.valueChanges
            .startWith(null)
            .debounceTime(500)
            .switchMap(txt => this.filter(txt));
    }

    filter(val: string) {
        if (val) { val = val.trim(); }

        return val ? this.getGames(val) : Observable.of([]);
    }

    getGames(name: string) {
        return this.gameService.getGames(name);
    }

    gameSelected(event: any) {
        this.searchText.patchValue('');
        this.router.navigate(['games', event.option.value.id]);
    }

    signOut() {
        this.tokenService.signOut();
        this.router.navigate(['home']);
    }

    searchGame() {
        if (this.searchText.dirty) {
            const value = this.searchText.value.trim();

            if (!value) { return null; }

            this.searchText.patchValue('');

            this.router.navigate(['games'], { queryParams: { name: value } });
        }
    }

    onScroll() {
        this.scroller.onScroll();
    }
}
