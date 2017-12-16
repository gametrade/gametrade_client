import { Injectable } from '@angular/core';
import { Theme } from '../../models/theme';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../base-service/base.service';

@Injectable()
export class ThemeService {

    constructor(
        private baseService: BaseService
    ) { }

    getThemes(): Observable<Theme[]> {
        return this.baseService.GET('themes.json').map(
            (result: any) => result.map(theme => theme.theme)
        );
    }
}
