import { Injectable } from '@angular/core';

import { User } from "../../models/user";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    public current_user: User;

    constructor() { }

    postLogin() {
        this.current_user = new User(
            'Renan',
            'http://via.placeholder.com/350x150',
            'renanlnobile@gmail.com'
        )

        return Observable.of(true);
    }

    deleteLogin() {
        delete this.current_user;

        return Observable.of(true);
    }
}