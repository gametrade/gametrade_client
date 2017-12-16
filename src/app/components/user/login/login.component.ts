//#region Imports
// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { LoginForm } from '../../../models/user';

// Services
import { UserService } from '../../../services/user/user.service';
import { MatSnackBar } from '@angular/material';

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
        private fb: FormBuilder,
        private snack: MatSnackBar) {
        this.loginForm = this.fb.group(new LoginForm());
    }

    ngOnInit() {
    }

    onSubmit({ value, valid }: { value: LoginForm, valid: boolean }) {
        if (valid) {
            this.userService.signIn(value).subscribe(
                (res) => {
                    const url = localStorage.getItem('redirectTo') || '/home';
                    this.router.navigateByUrl(url);
                    localStorage.removeItem('redirectTo');
                },
                (error: Error) => {
                    this.snack.open('Houve uma falha, tente novamente.', null, {
                        duration: 2000
                    });
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
