//#region Imports;

// Core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

// Services
import { Angular2TokenService } from 'angular2-token';

// Models
import { SignUpForm } from '../../../models/user';
import { ErrorsList } from '../../../models/errors';
import { UserService } from '../../../services/user/user.service';

//#endregion

@Component({
    selector: 'gametrade-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    //#region Public Properties
    public signUpForm: FormGroup;
    public errors: {
        email: '',
        passwords: {
            password: '',
            passwordConfirmation: ''
        }
    };

    //#endregion

    //#region Constructor
    constructor(
        private userService: UserService,
        private router: Router,
        private formBuilder: FormBuilder) {
        this.signUpForm = this.formBuilder.group({
            email: [null, Validators.compose([Validators.required, Validators.email])],
            passwords: this.formBuilder.group({
                password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
                passwordConfirmation: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
            }, { validator: this.checkPassword })
        });

        this.errors = {
            email: '',
            passwords: {
                password: '',
                passwordConfirmation: ''
            }
        };
    }

    //#endregion

    ngOnInit() { }

    // Method responsible for submiting the valid form
    onSubmit({ value, valid }: { value: SignUpForm, valid: boolean }) {
        if (valid) {
            this.userService.signUp(value).subscribe(
                (res) => {
                    localStorage.setItem('newProfile', 'true');

                    this.router.navigateByUrl('/profile');
                });
        }
    }

    // Method that checks form controls errors
    checkErrors(controlName: string) {
        let control;

        control = this.signUpForm.get(controlName);

        if (control.touched && control.errors) {
            return ErrorsList.getError('SGU', controlName, control.errors);
        }
    }

    // Validator method that matches the password and confirmation
    checkPassword(group: FormGroup): { [key: string]: any } {
        return group.controls.password.value === group.controls.passwordConfirmation.value ? null : { 'not_equal': true };
    }

    // Method that navigates back to home page
    goBack() {
        this.router.navigate(['/home']);
    }
}
