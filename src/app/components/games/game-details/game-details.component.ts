//#region Imports
// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Models
import { Game } from '../../../models/game';

// Services
import { GameService } from '../../../services/games/games.service';

//#endregion

@Component({
    selector: 'gametrade-game-details',
    templateUrl: './game-details.component.html',
    styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

    //#region Properties
    game: Game;
    total: number;

    dates: FormGroup;
    tomorrow = new Date();
    minCheckOut = new Date();

    //#endregion

    //#region Constructor
    constructor(
        private route: ActivatedRoute,
        private gameService: GameService,
        private fb: FormBuilder
    ) {
        this.tomorrow = this.theDayAfter(this.tomorrow);

        this.dates = fb.group({
            checkIn: ['', Validators.required],
            checkOut: ['', Validators.required]
        });

        this.dates.get('checkIn').valueChanges.subscribe(
            (value: any) => {
                this.minCheckOut = this.theDayAfter(new Date(value));
            }
        );
    }

    //#endregion

    ngOnInit() {
        this.route.params.subscribe(
            param => {
                this.gameService.getGame(param.id).subscribe(
                    (game: any) => {
                        this.game = game;
                    }
                );
            }
        );
    }

    saveGame() { }

    makeReservation() {
        if (this.dates.valid && this.dates.dirty) {
            // this.
        }
    }

    theDayAfter(date: Date) {
        date.setDate(date.getDate() + 1);

        return date;
    }
}
