import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation/reservation.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'gametrade-reservation',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

    my_reservations: any;
    my_requests: any;

    constructor(
        private reservationService: ReservationService,
        private snack: MatSnackBar
    ) { }

    ngOnInit() {
        this.reservationService.getReservations().subscribe(
            (result: any) => {
                this.my_reservations = result.my_reservations;
                this.my_requests = result.my_requests;
            },
            (error: any) => {
                this.snack.open('Não foi possível carregar suas reservas.', null, {
                    duration: 2000
                });
            }
        );
    }
}
