import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'gt-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    sendLogin() {
        this.userService.postLogin().subscribe(
            success => {
                this.router.navigate(['/home']);
            }
        )
    }
}