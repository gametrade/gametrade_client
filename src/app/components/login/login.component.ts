import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';

@Component({
    selector: 'gametrade-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(
        private tokenService: Angular2TokenService,
        private userService: UserService,
        private router: Router,
        private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group(
            {
                email: [null, Validators.compose([Validators.required, Validators.email])],
                password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
            }
        );
    }

    ngOnInit() {
        this.userService.current_user = JSON.parse(localStorage.getItem('current_user'));
    }

    signIn() {
        const formValue = this.loginForm.value;

        this.tokenService.signIn(formValue).subscribe(
            (res) => {
                const url = localStorage.getItem('redirectTo') || '/home';
                this.router.navigateByUrl(url);
            },
            (error: Error) => {
                console.log(error);
            }
        );
    }

    checkErrors(formControlName: string): string {
        const formControl = this.loginForm.get(formControlName);

        if (formControl.errors) {
            if (formControl.errors.required) {
                if (formControlName === 'email') {
                    return 'É necessário informar o e-mail.';
                } else {
                    return 'É necessário informar a senha.';
                }
            }

            if (formControl.errors.email) {
                return 'É necessário informar um e-mail válido.';
            }
            if (formControl.errors.minLength) {
                return 'A senha é muito curta.';
            }
        }
    }

    goBack() {
        this.router.navigate(['/home']);
    }
}
