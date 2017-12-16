import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentUserResolverService implements Resolve<any> {

    constructor(private tokenService: Angular2TokenService) { }

    resolve() {
        if (this.tokenService.userSignedIn()) {
            return this.tokenService.validateToken().map((result: Response) => result.json().data);
        }
    }
}
