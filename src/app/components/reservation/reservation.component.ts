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
                this.my_reservations = result.my_reservations.map(res => {
                    if (res.reservation.status === 'cancelled') {
                        res.reservation.status = 'Cancelada';
                    } else if (res.reservation.status === 'pending') {
                        res.reservation.status = 'Pendente';
                    } else if (res.reservation.status === 'approved') {
                        res.reservation.status = 'Aprovada';
                    }

                    return res.reservation;
                });
                this.my_requests = result.my_requests.map(res => {
                    if (res.reservation.status === 'cancelled') {
                        res.reservation.status = 'Cancelada';
                    } else if (res.reservation.status === 'pending') {
                        res.reservation.status = 'Pendente';
                    } else if (res.reservation.status === 'approved') {
                        res.reservation.status = 'Aprovada';
                    }

                    return res.reservation;
                });
            },
            (error: any) => {
                this.snack.open('Não foi possível carregar suas reservas.', null, {
                    duration: 2000
                });
            }
        );
    }

    approveReservation(reservation: any) {
        this.reservationService.approveReservation(reservation.id).subscribe(
            (result: any) => {
                this.snack.open('Reserva aprovada com sucesso.', null, { duration: 2000 });
            },
            (error: any) => {
                this.snack.open('Nao foi possível aprovar a reserva.', null, { duration: 2000 });
            }
        );
    }

    rejectReservation(reservation: any) {
        this.reservationService.rejectReservation(reservation.id).subscribe(
            (result: any) => {
                this.snack.open('Reserva rejeitada com sucesso.', null, { duration: 2000 });
            },
            (error: any) => {
                this.snack.open('Nao foi possível rejeitar a reserva.', null, { duration: 2000 });
            }
        );
    }

    cancelReservation(reservation: any) {
        this.reservationService.cancelReservation(reservation.id).subscribe(
            (result: any) => {
                this.snack.open('Reserva cancelada com sucesso.', null, { duration: 2000 });
            },
            (error: any) => {
                this.snack.open('Nao foi possível cancelar a reserva.', null, { duration: 2000 });
            }
        );
    }
}
