//#region Imports
// Core
import { Component, OnInit } from '@angular/core';

// Services
import { Angular2TokenService } from 'angular2-token';
import { Response } from '@angular/http/src/static_response';
import { BaseService } from './services/base-service/base.service';

//#endregion

@Component({
    selector: 'gametrade-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    //#region Constructor
    constructor(private tokenService: Angular2TokenService, private baseService: BaseService) {
        this.tokenService.init({
            apiPath: 'https://afternoon-sands-74647.herokuapp.com',
            signInRedirect: '/login',
            signInStoredUrlStorageKey: 'redirectTo',
            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        });
    }

    //#endregion

    //#region OnInit
    ngOnInit() {
        navigator.geolocation.getCurrentPosition(
            (position: Position) => {
                this.baseService.setLocation(position.coords);
            }
        );
    }

    //#endregion
}
