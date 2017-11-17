//#region Imports
// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { LoginForm } from '../../../models/user';

// Services
import { UserService } from '../../../services/user/user.service';

//#endregion

@Component({
    selector: 'gametrade-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(
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
    }

    onSubmit({ value, valid }: { value: LoginForm, valid: boolean }) {
        if (valid) {
            this.userService.signIn(value).subscribe(
                (res) => {
                    const url = localStorage.getItem('redirectTo') || '/home';
                    this.router.navigateByUrl(url);
                },
                (error: Error) => {
                    console.log(error);
                }
            );
        }
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
