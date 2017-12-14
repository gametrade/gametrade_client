import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

export class User {
    uid: string;
    id: string;
    name: FormControl = new FormControl(undefined);
    surname: FormControl = new FormControl(undefined);
    photo: FormControl = new FormControl(undefined);
    email: FormControl = new FormControl(undefined);
    address_attributes: FormGroup = new FormGroup(
        {
            kind: new FormControl(undefined),
            street: new FormControl(undefined),
            number: new FormControl(undefined),
            complement: new FormControl(undefined),
            zip_code: new FormControl(undefined),
            neighborhood: new FormControl(undefined),
            city: new FormControl(undefined),
            state: new FormControl(undefined),
            country: new FormControl(undefined),
            lat: new FormControl(undefined),
            lng: new FormControl(undefined)
        }
    );
}

export class SignUpForm {
    email: string;
    passwords: {
        password: string,
        passwordConfirmation: string
    };
}

export class LoginForm {
    email: FormControl = new FormControl(null, Validators.compose([Validators.required, Validators.email]));
    password: FormControl = new FormControl(null, Validators.compose([Validators.required, Validators.minLength(8)]));
}
