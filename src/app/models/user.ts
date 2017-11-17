export class User {
    uid: string;
    name: string;
    photo: string;
    email: string;
}

export class SignUpForm {
    email: string;
    passwords: {
        password: string,
        passwordConfirmation: string
    };
}

export class LoginForm {
    email: string;
    password: string;
}
