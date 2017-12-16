import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../models/game';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme/theme.service';
import { GameKindService } from '../../../services/game-kind/game-kind.service';

@Component({
    selector: 'gametrade-game-card',
    templateUrl: './game-card.component.html',
    styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
    @Input('game') game: Game;
    thumbnail: string;

    constructor(
        private router: Router,
        private themeService: ThemeService,
        private gkService: GameKindService
    ) { }

    ngOnInit() {
        if (this.game.photos && this.game.photos.length > 0) {
            this.thumbnail = this.game.photos[0].photo;
        }
    }

    // Navigates to the game page
    readMore() {
        this.router.navigate(['/games', this.game.id]);
    }
}
