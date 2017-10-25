//#region Imports
import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from './services/user/user.service';

//#endregion

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.current_user = JSON.parse(localStorage.getItem('current_user'));
    }
}