//#region Imports
// Core
import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from '../../services/user/user.service';

//#endregion

@Component({
    selector: 'gametrade-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public hasInfo: boolean;

    constructor(public userService: UserService) { }

    ngOnInit() {
        const localHasInfo = JSON.parse(localStorage.getItem('hasInfo'));
        this.hasInfo = (localHasInfo !== undefined && localHasInfo !== null) ? localHasInfo : true;
    }

    // Função que fecha o jumbotron de informações
    closeInfo() {
        this.hasInfo = false;
        localStorage.setItem('hasInfo', JSON.stringify(false));
    }
}
