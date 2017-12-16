//#region Imports
// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Models
import { Game } from '../../../models/game';

// Services
import { GameService } from '../../../services/games/games.service';

// Material
import { MatSnackBar } from '@angular/material';
import { BaseService } from '../../../services/base-service/base.service';
import { ReservationService } from '../../../services/reservation/reservation.service';
import { Reservation } from '../../../models/reservation';

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
    minEndDate = new Date();

    //#endregion

    //#region Constructor
    constructor(
        private route: ActivatedRoute,
        private gameService: GameService,
        private fb: FormBuilder,
        private snack: MatSnackBar,
        public baseService: BaseService,
        private reservationService: ReservationService,
        private router: Router
    ) {
        this.tomorrow = this.theDayAfter(this.tomorrow);

        this.dates = fb.group({
            startDate: ['', Validators.required],
            endDate: ['', Validators.required]
        });

        this.dates.controls.startDate.valueChanges.subscribe(
            (value: any) => {
                this.minEndDate = this.theDayAfter(new Date(value));
            }
        );

        this.dates.valueChanges.subscribe(
            (result: any) => {
                if (result.startDate && result.endDate) {
                    this.total = (this.game.price || 1) * this.getDays(result.startDate, result.endDate);
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

                        if (this.baseService.currentUser && game.user.id === this.baseService.currentUser.id) {
                            this.isOwner = true;
                        }

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
                    this.snack.open(`${this.game.name} adicionado aos seus favoritos.`, null, {
                        duration: 2000
                    });
                },
                (error: any) => {
                    this.snack.open(`Não foi possível adicionar ${this.game.name} aos seus favoritos.`, null, {
                        duration: 2000
                    });
                }
            );
        } else {
            this.gameService.removeFavorite(this.game.id).subscribe(
                (result: any) => {
                    this.snack.open(`${this.game.name} removido dos seus favoritos.`, null, {
                        duration: 2000
                    });
                },
                (error: any) => {
                    this.snack.open(`Não foi possível remover ${this.game.name} dos seus favoritos.`, null, {
                        duration: 2000
                    });
                }
            );
        }
    }

    makeReservation() {
        if (this.dates.valid && this.dates.dirty) {
            const value = this.dates.value;

            const reservation: Reservation = {
                game: this.game,
                startDate: value.startDate,
                endDate: value.endDate,
                totalDays: this.getDays(value.startDate, value.endDate)
            };

            this.reservationService.setGame(reservation);
            this.router.navigateByUrl('/confirm-reservation');
        }
    }

    theDayAfter(date: Date) {
        date.setDate(date.getDate() + 1);

        return date;
    }

    private getDays = (initialDate: Date, endDate: Date) => {
        const timeDiff = Math.abs(endDate.getTime() - initialDate.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
}
