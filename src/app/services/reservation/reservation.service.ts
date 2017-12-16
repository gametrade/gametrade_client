import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BaseService } from '../base-service/base.service';
import { Game } from '../../models/game';
import { Reservation } from '../../models/reservation';

@Injectable()
export class ReservationService {

    reservation: Reservation;

    constructor(
        private baseService: BaseService
    ) { }

    getReservations() {
        return this.baseService.GET(`reservations.json`)
        .catch(
            (err: any, caught: Observable<any>) => {
                return Observable.throw('Não foi possível carregar suas reservas.');
            }
        );
    }

    setGame = (reservation: Reservation) => this.reservation = reservation;

    postReservation() {
        if (!this.reservation) { throw new Error('Não há jogo a ser reservado'); }

        const payload = {
            reservation: {
                game_id: this.reservation.game.id,
                user_id: this.baseService.currentUser.id,
                start_date: this.reservation.startDate,
                end_date: this.reservation.endDate
            }
        };

        return this.baseService.POST('reservations.json', payload);
    }

    approveReservation() {
        return;
    }
}
