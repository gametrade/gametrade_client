import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'gametrade-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(public userService: UserService) { }

    ngOnInit() { }
}