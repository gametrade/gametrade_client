import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../models/game';
import { Router } from '@angular/router';

@Component({
    selector: 'gametrade-game-card',
    templateUrl: './game-card.component.html',
    styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
    @Input('game') game: Game;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    // Navigates to the game page
    readMore() {
        this.router.navigate(['/games', this.game.id]);
    }
}
