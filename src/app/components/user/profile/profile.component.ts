//#region Imports

// Core
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

// Services
import { UserService } from '../../../services/user/user.service';
import { UtilityService } from '../../../services/utility/utility.service';

// Models
import { User } from '../../../models/user';
import { GametradeFile } from '../../../models/gametrade-file';
import { BaseService } from '../../../services/base-service/base.service';

//#endregion

@Component({
    selector: 'gametrade-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    photo: string;
    mask = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
    profile_form: FormGroup;

    stateOptions = [
        'AC',
        'AL',
        'AM',
        'AP',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MG',
        'MS',
        'MT',
        'PA',
        'PB',
        'PE',
        'PI',
        'PR',
        'RJ',
        'RN',
        'RO',
        'RR',
        'RS',
        'SC',
        'SE',
        'SP',
        'TO'
    ];

    filteredOptions: any;

    constructor(
        private utilityService: UtilityService,
        private userService: UserService,
        public baseService: BaseService,
        private fb: FormBuilder
    ) {
        this.profile_form = this.fb.group(new User());
    }

    ngOnInit() {
        this.filteredOptions = this.profile_form.get('address_attributes.state').valueChanges
            .startWith(null)
            .map(val => val ? this.filter(val) : this.stateOptions.slice());

        this.userService.getProfile().subscribe(
            (result: any) => {
                result.user.address_attributes = {...result.user.address};

                delete result.user.address;

                this.profile_form.patchValue(result.user);
            }
        );
    }

    filter(val: string): string[] {
        return this.stateOptions.filter(option =>
            option.toUpperCase().indexOf(val.toUpperCase()) === 0);
    }

    onFileSelect(event: FileList) {
        this.utilityService.readFiles(event).subscribe(
            (files: GametradeFile[]) => {
                this.photo = files[0].data;
                this.savePhoto();
            }
        );
    }

    changeCEP() {
        const value = this.profile_form.get('address_attributes.zip_code').value;

        if (value && value.length === 9) {
            value.replace('-', '');

            this.baseService.GET(`https://viacep.com.br/ws/${value}/json`, null, null, true).subscribe(
                (result: any) => {
                    this.profile_form.patchValue(
                        {
                            address_attributes: {
                                street: result.logradouro,
                                neighborhood: result.bairro,
                                city: result.localidade,
                                state: result.uf
                            }
                        },
                    );
                }
            );
        }
    }

    savePhoto() {
        if (this.photo) {
            this.userService.savePhoto(this.photo).subscribe(
                (result: any) => {
                    this.userService.getProfile().subscribe();
                }
            );
        }
    }

    saveProfile() {
        if (this.profile_form.valid && this.profile_form.dirty) {
            this.userService.updateProfile(this.profile_form.value).subscribe(
                (result: any) => {
                    console.log(result);
                }
            );
        }
    }
}
