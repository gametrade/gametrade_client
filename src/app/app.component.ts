import { Component } from '@angular/core';

import { MdDialog } from "@angular/material";

import { LoginComponent } from "./components/login/login.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private dialog: MdDialog) { }

    openLogin() {
        this.dialog.open(LoginComponent);
    }

    openRegister() { }
}