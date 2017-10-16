import { Injectable } from '@angular/core';

import { User } from "../../models/user";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    public current_user: User;

    constructor(private router: Router) { }

    postLogin(email, password): Observable<boolean> {
        this.current_user = new User(
            'Renan',
            '"https://s3.amazonaws.com/uifaces/faces/twitter/iamjdeleon/128.jpg"',
            email
        );

        localStorage.setItem('current_user', JSON.stringify(this.current_user));

        return Observable.of(true);
    }

    deleteLogin() {
        delete this.current_user;

        localStorage.removeItem('current_user');

        this.router.navigate(['/home']);

        return Observable.of(true);
    }
}