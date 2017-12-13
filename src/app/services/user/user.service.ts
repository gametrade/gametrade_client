//#region Imports
// Core
import { Injectable } from '@angular/core';

// RxJS
import { Observable } from 'rxjs/Observable';

// Models
import { LoginForm, User, SignUpForm } from '../../models/user';

// Services
import { Angular2TokenService } from 'angular2-token';
import { BaseService } from '../base-service/base.service';
import { PhotoPayload } from '../../models/game';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UserService {

    constructor(
        private baseService: BaseService,
    ) {
    }

    signIn(value: LoginForm) {
        return this.baseService.signIn(value);
    }

    signUp(value: SignUpForm) {
        return this.baseService.signUp(value);
    }

    getProfile() {
        return this.baseService.GET(`users/${this.baseService.currentUser.id}.json`);
    }

    updateProfile(value: User) {
        value.email = this.baseService.currentUser.email;
        value.address_attributes['country'] = 'Brasil';

        const payload = {
            user: value
        };

        return this.baseService.PATCH(`users/${this.baseService.currentUser.id}.json`, payload);
    }

    savePhoto(photo: string) {
        const payload = {
            user: {
                photo
            }
        };

        return this.baseService.PATCH(`users/${this.baseService.currentUser.id}.json`, payload);
    }
}
