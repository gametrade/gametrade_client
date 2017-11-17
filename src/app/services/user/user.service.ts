//#region Imports
// Core
import { Injectable } from '@angular/core';

// RxJS
import { Observable } from 'rxjs/Observable';

// Models
import { LoginForm, User } from '../../models/user';

// Services
import { Angular2TokenService } from 'angular2-token';
import { BaseService } from '../base-service/base.service';

@Injectable()
export class UserService {

    constructor(
        private baseService: BaseService) {
        }

    signIn(value: LoginForm) {
        return this.baseService.signIn(value);
    }

    updateProfile(value: User) {
        return this.baseService.PUT('/user', value);
    }
}
