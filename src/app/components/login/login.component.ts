import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'gt-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;

    constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
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

    sendLogin() {
        let formValue = this.loginForm.value;

        this.userService.postLogin(formValue.email, formValue.password).subscribe(
            (success: boolean) => {
                if (success)
                    this.router.navigate(['/home']);
            }
        )
    }

    checkErrors(formControlName: string): string {
        let formControl = this.loginForm.get(formControlName);

        if (formControl.errors) {
            if (formControl.errors.required) {
                if (formControlName === 'email') return 'É necessário informar o e-mail.';
                else return 'É necessário informar a senha.';
            }

            if (formControl.errors.email) return 'É necessário informar um e-mail válido.'
            if (formControl.errors.minLength) return 'A senha é muito curta.'
        };
    }

    goBack() {
        this.router.navigate(['/home']);
    }
}