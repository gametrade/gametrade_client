//#region Imports
// Core
import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from './services/user/user.service';
import { Angular2TokenService } from 'angular2-token';

//#endregion

@Component({
    selector: 'gametrade-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    //#region Constructor
    constructor(private userService: UserService, private tokenService: Angular2TokenService) {
        this.tokenService.init({
            apiPath: 'http://localhost:3000/api/v1',
            signInRedirect: '/',
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
        this.userService.current_user = JSON.parse(localStorage.getItem('current_user'));
    }

    //#endregion
}
