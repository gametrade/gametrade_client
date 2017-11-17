//#region Imports
// Core
import { Component, OnInit } from '@angular/core';

// Services
import { Angular2TokenService } from 'angular2-token';

//#endregion

@Component({
    selector: 'gametrade-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    //#region Constructor
    constructor(private tokenService: Angular2TokenService) {
        this.tokenService.init({
            apiPath: 'https://afternoon-sands-74647.herokuapp.com/',
            signInRedirect: '/login',
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
        if (this.tokenService.userSignedIn()) {
            this.tokenService.validateToken();
        }
    }

    //#endregion
}
