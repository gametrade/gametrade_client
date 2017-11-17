export class ErrorsList {
    private static groups = {
        LOG: {
            email: {
                required: 'É necessário informar o e-mail.',
                email: 'É necessário informar um e-mail válido.'
            },
            password: {
                required: 'É necessário informar a senha',
                minlength: 'É muito curta (Mínimo (8) caractéres).'
            }
        },
        SGU: {
            email: {
                required: 'É necessário informar o e-mail.',
                email: 'É necessário informar um e-mail válido.'
            },
            passwords: {
                required: 'É necessário informar a senha',
                minlength: 'A senha é muito curta (Mínimo (8) caractéres).',
                not_equal: 'As senhas devem ser iguais.'
            }
        }
    };

    public static getError(group: string, field: string, types: any): string {
        const keys = Object.keys(types);

        for (const key of keys) {
            return this.groups[group][field.split('.')[0] || 'field'][key];
        }
    }
}
