//#region Imports
// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Models
import { Game } from '../../../models/game';

// Services
import { GameService } from '../../../services/games/games.service';

// Material
import { MatSnackBar } from '@angular/material';
import { BaseService } from '../../../services/base-service/base.service';

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
    isFavorite: boolean;
    isOwner: boolean;

    thumbnail: string;

    dates: FormGroup;
    tomorrow = new Date();
    minCheckOut = new Date();

    //#endregion

    //#region Constructor
    constructor(
        private route: ActivatedRoute,
        private gameService: GameService,
        private fb: FormBuilder,
        private snack: MatSnackBar,
        private baseService: BaseService
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

        this.dates.valueChanges.subscribe(
            (result: any) => {
                if (result.checkIn && result.checkOut) {
                    const timeDiff = Math.abs(result.checkOut.getTime() - result.checkIn.getTime());
                    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                    this.total = (this.game.price || 1) * diffDays;
                }
            }
        );
    }

    //#endregion

    ngOnInit() {
        this.route.params.subscribe(
            param => {
                this.gameService.getGame(param.id).subscribe(
                    (game: any) => {
                        if (game.photos && game.photos.length > 0) {
                            this.thumbnail = game.photos[0].photo;
                        }

                        if (game.user.id === this.baseService.currentUser.id) { this.isOwner = true; }

                        this.game = game;
                    }
                );
            }
        );
    }

    toggleFavorite() {
        if (!this.isFavorite) {
            this.gameService.setFavorite(this.game.id).subscribe(
                (result: any) => {
                    this.snack.open(`${this.game.name} adicionado aos seus favoritos.`);
                },
                (error: any) => {
                    this.snack.open(`Não foi possível adicionar ${this.game.name} aos seus favoritos.`);
                }
            );
        } else {
            this.gameService.removeFavorite(this.game.id).subscribe(
                (result: any) => {
                    this.snack.open(`${this.game.name} removido dos seus favoritos.`);
                },
                (error: any) => {
                    this.snack.open(`Não foi possível remover ${this.game.name} dos seus favoritos.`);
                }
            );
        }
    }

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
