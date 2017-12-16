import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../services/reservation/reservation.service';
import { Game } from '../../../models/game';
import { Reservation } from '../../../models/reservation';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'gametrade-confirm-reservation',
    templateUrl: './confirm-reservation.component.html',
    styleUrls: ['./confirm-reservation.component.scss']
})
export class ConfirmReservationComponent implements OnInit {

    reservation: Reservation;
    game: Game;
    total: number;

    constructor(
        private reservationService: ReservationService,
        private snack: MatSnackBar,
        private router: Router
    ) { }

    ngOnInit() {
        this.reservation = this.reservationService.reservation;

        if (this.reservation) {
            this.total = this.reservation.totalDays * this.reservation.game.price;
        }
    }

    confirmReservation() {
        this.reservationService.postReservation().subscribe(
            (result: any) => {
                this.router.navigateByUrl('/success-reservation');
            },
            (error: any) => {
                this.snack.open('Não foi possível realizar a reserva.', null, {
                    duration: 2000
                });
            }
        );
    }
}
